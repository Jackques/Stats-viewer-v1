import {Component} from '@angular/core';
import {ChartConfiguration, ChartOptions} from 'chart.js';
import myData from './data.json';
import { DataService } from './services/data.service';
import { ProfileDataResponse } from './interfaces/profileDataResponse.interface';
import { FitnessDataResponse } from './interfaces/fitnessDataResponse.interface';
import { FitnessData } from './interfaces/fitnessData.interface';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Subscription } from 'rxjs';
import { FitnessModelList } from './model/fitnessModelList';
import { FitnessModel } from './model/fitnessModel';
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

  private profileDataSubscription: Subscription | null = null;
  private fitnessDataSubscription: Subscription | null = null;
  private profileDataListResponse: ProfileDataResponse | undefined;
  private fitnessDataResponse: FitnessDataResponse | undefined;

  private fitnessModelList: FitnessModelList = new FitnessModelList();
  private myChart: Chart | null = null;

  constructor(private dataService: DataService) {}

  public ngOnInit(): void {

    this.profileDataSubscription = this.dataService.getProfiles().subscribe({
      next: (data) => {
        this.profileDataListResponse = <ProfileDataResponse>(data);
        console.log("This should be the response???: ", this.profileDataListResponse);

        const profileName = this.profileDataListResponse.response[0].name;
        const profileDateTime = this.profileDataListResponse.response[0].dateTimeLatestResource;
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
    });

    this.fitnessDataSubscription = this.dataService.getFitnessData().subscribe({
      next: (data) => {
        this.fitnessDataResponse = <FitnessDataResponse>(data);
        console.log("This should be the fitness response???: ", data);

        debugger;

        // if(this.chart && this.chart.data){
          // const maxNumberofPoints = 60;
          // const maxNumberofPoints = 100;
          // const dateList: string[] = [];
          // this.fitnessDataResponse?.response[0].queryResultsList.forEach((fitnessDataItem: FitnessData, index: number) => {
          //   if(index <= maxNumberofPoints){
          //     dateList.push(fitnessDataItem.Datum);
          //   }
          // });

          this.fitnessDataResponse?.response[0].queryResultsList.forEach((fitnessDataItem: FitnessData)=>{
            
            const fitnessModel = new FitnessModel;

            fitnessModel.setNo(fitnessDataItem['No']);
            fitnessModel.setMetingDoor(fitnessDataItem['Meting door:']);
            fitnessModel.setDatum(fitnessDataItem['Datum']);
            fitnessModel.setGewicht(fitnessDataItem['Gewicht in kg']);
            fitnessModel.setVetPercentage(fitnessDataItem['Vetpercentage in %']);
            fitnessModel.setSpierMassa(fitnessDataItem['Spiermassa in KG']);
            fitnessModel.setSpierMassaInPercentage(fitnessDataItem['Spiermassa in PERCENTAGE (nu met kommagetal!)']);
            fitnessModel.setLichaamsvocht(fitnessDataItem['Lichaamsvocht in KG']);
            fitnessModel.setLichaamsvochtInPercentage(fitnessDataItem['Lichaamsvocht in PERCENTAGE (nu met kommagetal)']);
            fitnessModel.setBotmassa(fitnessDataItem['Botmassa in KG']);
            fitnessModel.setBotmassaInPercentage(fitnessDataItem['Botmassa in PERCENTAGE (nu met kommagetal)']);
            fitnessModel.setNotities(fitnessDataItem['Notities']);

            this.fitnessModelList.addFitnessModel(fitnessModel);
          });

        this.setDataChart(this.fitnessModelList);
      },
      error: (e) => console.error(e),
      complete: () => this.renderDataChart()
    });
  };

  public updateData(){
    // TODO: Needs
    alert('Needs work');
  }

  private renderDataChart() {
    if(!this.myChart){
      console.error('Could not render chart');
    }else{
      this.myChart.render();
    }
  }

  private setDataChart(fitnessModelList: FitnessModelList): void {
    this.myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: fitnessModelList.getDatumsList(),
        datasets: [
          {
            label: 'My First Dataset',
            data: this.getXNumbers(),
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            backgroundColor: 'orange',
            pointBorderColor: 'red',
            pointBackgroundColor: 'red',
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
              autoSkip: false,
            }
          }
        }
      }
    });
  }

  private getXNumbers(): number[] {
    const listOfNumbers: number[] = [];
    for(let i = 0; i < 100; i++){
      listOfNumbers.push(
        parseFloat(""+Math.floor(Math.random() * (100 - 70 + 1) + 70)+"."+Math.floor(Math.random() * (100 - 70 + 1) + 70))
      );
    }

    return listOfNumbers;
  }

  private parseFloat(str: string | string[], val: number): number {
    str = str.toString();
    str = str.slice(0, (str.indexOf(".")) + val + 1);
    return Number(str); // doesn't work; tldr: invest more time on how to get clean floats in js.
  }
}
