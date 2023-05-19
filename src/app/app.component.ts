import {Component} from '@angular/core';
import {ChartConfiguration, ChartOptions} from 'chart.js';
import myData from './data.json';
import { DataService } from './data.service';
import { ProfileDataResponse } from './interfaces/profileDataResponse.interface';
import { FitnessDataResponse } from './interfaces/fitnessDataResponse.interface';
import { FitnessData } from './interfaces/fitnessData.interface';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
Chart.register(zoomPlugin);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stats-server-viewer';

  // global
  // Jack: apparantly i can insert any primitive value i like (string, decimal, integer, boolean even!..
  // even a null but this does generate an 'empty space')

  // the values below are defaults
  // private globalLabels = [2006, 2007, 2008, 2009, 2010, 2011, '2012', null];
  // private globalLabels = myData.response[0].queryResultsList.map((queryResult) => {
  //   return queryResult.Datum;
  // });
  // private globalLabels: string[] = [];
  // private globalDataSetA = {
  //   // data: [65, 59, 80, 150, 56, 55, 40, 89],
  //   data: this.get90Numbers(),
  //   // the last value (which is one value more than there are labels DID NOT get displayed IF there is no label for it
  //   label: 'Spiermassa',
  //   fill: true,
  //   tension: 0.5,
  //   borderColor: 'black',
  //   backgroundColor: 'rgba(255,0,0,0.3)'
  // };
  // private globalDataSetB = {
  //   data: [28, 48, -40, 19, 86, 27, 90],
  //   label: 'Vetpercentage',
  //   backgroundColor: 'rgba(219,70,4,0.3)'
  // };
  // private globalDataSetC = {
  //   data: [28, 48, -40, 19, 86, 27, 90],
  //   label: 'Lichaamsvocht in KG',
  //   backgroundColor: 'rgba(97,219,243,0.3)'
  // };
  // private globalDataSetD = {
  //   data: [28, 48, -40, 19, 86, 27, 90],
  //   label: 'Gewicht in kg',
  //   backgroundColor: 'rgba(63,59,59,0.3)'
  // };
  profileDataSubscription: any;
  fitnessDataSubscription: any;
  profileDataList: ProfileDataResponse | undefined;
  fitnessData: FitnessDataResponse | undefined;
  // the values above are defaults

  constructor(private dataService: DataService) {
    // console.dir(myData);


    // this.globalLabels = myData.response[0].queryResultsList.map((queryResult) => {
    //   return queryResult.Datum;
    // });
    // this.globalLabels = this.fitnessData?.response[0] ? this.fitnessData?.response[0].queryResultsList.map((fitnessDataItem: FitnessData) => {
    //     return fitnessDataItem.Datum;
    //   }) : [];
    // this.globalDataSetA.data = myData.response[0].queryResultsList.map((queryResult)=>{
    //   const test = queryResult["Spiermassa in KG"];
    //   // const testint = parseFloat(test).toFixed(2);
    //   // return testint;
    //   return this.parseFloat(test, 2);
    // });

    // this.globalDataSetB.data = myData.response[0].queryResultsList.map((queryResult)=>{
    //   const test = queryResult["Vetpercentage in %"];
    //   return this.parseFloat(test, 2);
    // });

    // this.globalDataSetC.data = myData.response[0].queryResultsList.map((queryResult)=>{
    //   const test = queryResult["Lichaamsvocht in KG"];
    //   return this.parseFloat(test, 2);
    // });
    // this.globalDataSetD.data = myData.response[0].queryResultsList.map((queryResult)=>{
    //   const test = queryResult["Gewicht in kg"];
    //   return this.parseFloat(test, 2);
    // });
  }

  // barsøøó
  // public barChartData: ChartConfiguration<'bar'>['data'] = {
  //   // labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
  //   labels: this.globalLabels,
  //   // datasets: [
  //   //   { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
  //   //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
  //   // ]
  //   datasets: [this.globalDataSetA, this.globalDataSetB]
  // };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  private parseFloat(str: string | string[], val: number): number {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1);
    return Number(str); // doesn't work; tldr: invest more time on how to get clean floats in js.
  }
  // console.log(ParseFloat("10.547892",2))

// line
  // public lineChartData: ChartConfiguration<'line'>['data'] = {
  //   // labels: [
  //   //   'January',
  //   //   'February',
  //   //   'March',
  //   //   'April',
  //   //   'May',
  //   //   'June',
  //   //   'July'
  //   // ],
  //   // labels: this.globalLabels,
  //   // datasets: [
  //   //   {
  //   //     data: [ 65, 59, 80, 81, 56, 55, 40 ],
  //   //     label: 'Series A',
  //   //     fill: true,
  //   //     tension: 0.5,
  //   //     borderColor: 'black',
  //   //     backgroundColor: 'rgba(255,0,0,0.3)'
  //   //   }
  //   // ]
  //   // datasets: [this.globalDataSetA, this.globalDataSetB, this.globalDataSetC]
  //   // datasets: [this.globalDataSetA]
  // };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  ngOnInit(): void {

    this.profileDataSubscription = this.dataService.getProfiles().subscribe({
      next: (data) => {
        this.profileDataList = <ProfileDataResponse>(data);
        console.log("This should be the response???: ", this.profileDataList);

        const profileName = this.profileDataList.response[0].name;
        const profileDateTime = this.profileDataList.response[0].dateTimeLatestResource;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });

    this.fitnessDataSubscription = this.dataService.getFitnessData().subscribe({
      next: (data) => {
        this.fitnessData = <FitnessDataResponse>(data);
        console.log("This should be the fitness response???: ", data);

        debugger;

        // this.globalLabels = this.fitnessData?.response[0] ? this.fitnessData?.response[0].queryResultsList.map((fitnessDataItem: FitnessData) => {
        //   return fitnessDataItem.Datum;
        // }) : [];

        debugger;

        // if(this.chart && this.chart.data){
          // const maxNumberofPoints = 60;
          const maxNumberofPoints = 100;
          const dateList: string[] = [];
          this.fitnessData?.response[0].queryResultsList.forEach((fitnessDataItem: FitnessData, index: number) => {
            if(index <= maxNumberofPoints){
              // this.chart?.data?.labels?.push(fitnessDataItem.Datum);
              dateList.push(fitnessDataItem.Datum);
            }
          });
          // debugger;
          // this.chart.render();
          // debugger;
          // this.chart.update();
          // debugger;
        // }

        let myChart = new Chart('myChart', {
          type: 'line',
          data: {
            labels: dateList,
            datasets: [
              {
                label: 'My First Dataset',
                data: this.getXNumbers(),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor: 'orange',
                pointBorderColor: 'red',
                pointBackgroundColor: 'red'
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              zoom: {
                pan: {
                  enabled: true,
                  mode: 'x'
                },
                zoom: {
                  wheel: {
                    enabled: true
                  },
                  pinch: {
                    enabled: true
                  },
                  mode: 'x'
                }
              }
            },
            scales: {
              x: {
                ticks: {
                  autoSkip: false, // remove this to 'hide' some ticks which would not fit the x-axis neatly
                  // stepSize: 1 // remove this line to get autoscalling 
                }
              }
            }
          }
        });
        myChart.render();

      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });
  }

  private getXNumbers(): number[] {
    const listOfNumbers = [];
    for(let i = 0; i < 100; i++){
      listOfNumbers.push(
        Math.floor(Math.random() * (100 - 70 + 1) + 70)
      );
    }

    return listOfNumbers;
  }
}
