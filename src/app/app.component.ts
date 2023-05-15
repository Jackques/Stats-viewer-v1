import {Component} from '@angular/core';
import {ChartConfiguration, ChartOptions} from 'chart.js';
import myData from './data.json';
import { DataService } from './data.service';

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
  private globalLabels = myData.response[0].queryResultsList.map((queryResult) => {
    return queryResult.Datum;
  });
  private globalDataSetA = {
    data: [65, 59, 80, 150, 56, 55, 40, 89],
    // the last value (which is one value more than there are labels DID NOT get displayed IF there is no label for it
    label: 'Spiermassa',
    fill: true,
    tension: 0.5,
    borderColor: 'black',
    backgroundColor: 'rgba(255,0,0,0.3)'
  };
  private globalDataSetB = {
    data: [28, 48, -40, 19, 86, 27, 90],
    label: 'Vetpercentage',
    backgroundColor: 'rgba(219,70,4,0.3)'
  };
  private globalDataSetC = {
    data: [28, 48, -40, 19, 86, 27, 90],
    label: 'Lichaamsvocht in KG',
    backgroundColor: 'rgba(97,219,243,0.3)'
  };
  private globalDataSetD = {
    data: [28, 48, -40, 19, 86, 27, 90],
    label: 'Gewicht in kg',
    backgroundColor: 'rgba(63,59,59,0.3)'
  };
  profileDataSubscription: any;
  profileDataList: ProfileDataResponse | undefined;
  // the values above are defaults

  constructor(private dataService: DataService) {
    // console.dir(myData);


    this.globalLabels = myData.response[0].queryResultsList.map((queryResult) => {
      return queryResult.Datum;
    });
    this.globalDataSetA.data = myData.response[0].queryResultsList.map((queryResult)=>{
      const test = queryResult["Spiermassa in KG"];
      // const testint = parseFloat(test).toFixed(2);
      // return testint;
      return this.parseFloat(test, 2);
    });

    this.globalDataSetB.data = myData.response[0].queryResultsList.map((queryResult)=>{
      const test = queryResult["Vetpercentage in %"];
      return this.parseFloat(test, 2);
    });

    this.globalDataSetC.data = myData.response[0].queryResultsList.map((queryResult)=>{
      const test = queryResult["Lichaamsvocht in KG"];
      return this.parseFloat(test, 2);
    });
    this.globalDataSetD.data = myData.response[0].queryResultsList.map((queryResult)=>{
      const test = queryResult["Gewicht in kg"];
      return this.parseFloat(test, 2);
    });
  }

  // barsøøó
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    // labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    labels: this.globalLabels,
    // datasets: [
    //   { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
    //   { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    // ]
    datasets: [this.globalDataSetA, this.globalDataSetB]
  };

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
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    // labels: [
    //   'January',
    //   'February',
    //   'March',
    //   'April',
    //   'May',
    //   'June',
    //   'July'
    // ],
    labels: this.globalLabels,
    // datasets: [
    //   {
    //     data: [ 65, 59, 80, 81, 56, 55, 40 ],
    //     label: 'Series A',
    //     fill: true,
    //     tension: 0.5,
    //     borderColor: 'black',
    //     backgroundColor: 'rgba(255,0,0,0.3)'
    //   }
    // ]
    datasets: [this.globalDataSetA, this.globalDataSetB, this.globalDataSetC]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true
  };
  public lineChartLegend = true;

  ngOnInit(): void {
    this.profileDataSubscription = this.dataService.getProfiles().subscribe(
      data => {
        this.profileDataList = <ProfileDataResponse>(data);
        console.log("This should be the response???: ", this.profileDataList);

        const profileNeeded = this.profileDataList.response[0].name;
        debugger;
      },
      err => {
    
      });
  }

}

interface ProfileDataResponse {
  response: {
      dateTimeLatestResource: string,
      name: string
  }[]
}