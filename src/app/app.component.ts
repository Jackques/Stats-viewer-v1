import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, Color, ScriptableLineSegmentContext, ScriptableScaleContext } from 'chart.js';
import myData from './data.json';
import { DataService } from './services/data.service';
import { ProfileDataResponse } from './interfaces/profileDataResponse.interface';
import { FitnessDataResponse } from './interfaces/fitnessDataResponse.interface';
import { FitnessData } from './interfaces/fitnessData.interface';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Observable, Subscription } from 'rxjs';
import { FitnessModelList } from './model/fitnessModelList';
import { FitnessModel } from './model/fitnessModel';
import { QueryModel } from './model/queryModel';
import { QueryResponse } from './interfaces/queryResponse.interface';
import { ProfileData } from './interfaces/profileData.interface';

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

  private profileDataSubscription: Observable<ProfileDataResponse> | null = null;
  private fitnessQueryDataDetailSubscription: Subscription | null = null;
  private fitnessQueryDataSubscription: Observable<QueryResponse> | null = null;
  private profileDataListResponse: ProfileDataResponse | undefined;
  private fitnessDataResponse: FitnessDataResponse | undefined;

  private query: QueryModel | null = null;
  private fitnessModelList: FitnessModelList = new FitnessModelList();
  private myChart: Chart | null = null;
  private chartShown = false;

  private myProfile: ProfileData = {
    profileName: "",
    dateTimeLatestResource: ""
  };

  public queryUpdateAvailable: boolean = this.queryNeedsUpdate();

  private weekIntervalGewichtList: string[] = [];

  constructor(private dataService: DataService) { }

  public ngOnInit(): void {
    this.setProfileData().subscribe({
      next: (data: ProfileDataResponse) => {
        this.myProfile.profileName = data.response[0].name;
        this.myProfile.dateTimeLatestResource = data.response[0].dateTimeLatestResource;

        this.setQueryData().subscribe({
          next: (data: QueryResponse) => {
            // debugger;
            this.query = new QueryModel(data.description,
              data.id,
              data.name,
              data.projectName,
              data.querySetResults.totalResults,
              data.queries[0].fromDate,
              data.queries[0].toDate,
              data.queries[0].fromProfiles[0],
              data.queryMetaData.affectedProfileNames[0],
              data.querySetResults.queryResults[0].id
            );
            // debugger;
            this.setQueryDetails(this.query.getId(), this.query.getDetailsId());
            this.queryUpdateAvailable = this.queryNeedsUpdate();
            // debugger;
          },
          error: () => {
          },
          complete: () => {
    
          }
        });
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete')
    });
  };

  private setQueryDetails(queryId: string, detailsId: string): void {
    if (queryId.length === 0 || detailsId.length === 0) {
      console.error("queryId or queryDetailsId was not set");
      return;
    }

    this.fitnessQueryDataDetailSubscription = this.dataService.getFitnessData(queryId, detailsId).subscribe({
      next: (data: FitnessDataResponse) => {
        data.response[0].queryResultsList.reverse().forEach((fitnessDataItem: FitnessData) => {

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

        this.setWeeksIntervalFromGewichtV2(this.fitnessModelList);
        this.setDataChart(this.fitnessModelList);
      },
      error: (e) => console.error(e),
      complete: () => this.renderDataChart()
    });
  }

  private setWeeksIntervalFromGewichtV2(fitnessModelList: FitnessModelList): void {
    var myDate = new Date();

    fitnessModelList.getDatumsWithMetingDoorList().forEach((datum)=>{
      myDate.setFullYear(parseInt(datum.slice(0,2)));
      myDate.setMonth(parseInt(datum.slice(3,5)));
      myDate.setDate(parseInt(datum.slice(6,10)));

      if(myDate.getDay() == 6 || myDate.getDay() == 0) {
        this.weekIntervalGewichtList.push(datum);
      }
    });
    console.log(`sun-saturdays`);
    console.log(this.weekIntervalGewichtList);
  }
  // private setWeeksIntervalFromGewicht(fitnessModelList: FitnessModelList) {
  //   // fitnessModelList.getGewichtList().forEach((gewichtEntry, index)=>{
      
  //   // })
  //   const every_day_list = fitnessModelList.getDatumsList().filter((e, i, arr)=>{
  //     if(i !== 0 && !e.startsWith(arr[i - 1].slice(0, 9))){
  //       return false
  //     }
  //     return true;
  //   });
  //   debugger;
  //   const every_7nth = (arr: string[], nth: number) => arr.filter((e, i) => i === 0 || i % nth === nth - 1);
  //   console.log(`Results every 7th entry: `);
  //   console.log(every_7nth(fitnessModelList.getDatumsList(), 7));
  // }

  private setQueryData(): Observable<QueryResponse> {
    this.fitnessQueryDataSubscription = this.dataService.getFitnessQuery();
    return this.fitnessQueryDataSubscription;
  }

  private setProfileData(): Observable<ProfileDataResponse> {
    this.profileDataSubscription = this.dataService.getProfiles();
    return this.profileDataSubscription;
  }

  public updateData(): void {
    this.dataService.updateFitnessQuery().subscribe({
      next: (response: boolean) => {
        if(response){
          this.ngOnInit();
        }else{
          console.error(`Query could not be updated`);
        }
      },
      error: () => {
        console.error(`Query could not be updated`);
      },
      complete: () => {}
    });
  }

  private renderDataChart(): void {
    if (!this.myChart) {
      console.error('Could not render chart');
    } else {
      if(this.chartShown){
        this.myChart.update()
      }else{
        this.myChart.render();
        this.chartShown = true;
      }
    }
  }

  private getColorLabel(context: ScriptableScaleContext): "rgba(54, 162, 235, 1)" | "#000000" {
      const label = context.tick.label;
      const isString = typeof label === 'string';

      if (isString && this.weekIntervalGewichtList.includes(label)) {
        console.log(`this is a weekendday: `, label);
        return 'rgba(54, 162, 235, 1)';
    }
    console.log(`this is NOT a weekendday: `, label);
    return '#000000';
  };

  private setDataChart(fitnessModelList: FitnessModelList): void {

    console.dir(fitnessModelList.getGewichtList());

    debugger;
    // todo: is this id really the chart id (which is supposed to be number 1) but in string format i.e. '1'?
    const id = this.myChart?.id;

    // todo: for now i always know the chart id will be 1, so i will just use hardcoded number 1
    if(this.myChart?.isDatasetVisible(1)){
      this.myChart?.destroy()
    }

    this.myChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: fitnessModelList.getDatumsWithMetingDoorList(),
        datasets: [
          {
            label: 'Vetpercentage',
            data: fitnessModelList.getVetPercentageList(),
            fill: true,
            borderColor: '#F4B183',
            tension: 0.1,
            backgroundColor: '#FFD966',
            pointBorderColor: '#DFA67B',
            pointBackgroundColor: '#DFA67B',
          },
          {
            label: 'Vochtgehalte',
            data: fitnessModelList.getLichaamsvochtList(),
            fill: true,
            borderColor: '#91D8E4',
            tension: 0.1,
            backgroundColor: '#BFEAF5',
            pointBorderColor: '#82AAE3',
            pointBackgroundColor: '#82AAE3',
          },
          {
            label: 'Spiermassa',
            data: fitnessModelList.getSpierMassaList(),
            fill: true,
            borderColor: '#FFABAB',
            tension: 0.1,
            backgroundColor: '#FCC8D1',
            pointBorderColor: '#D14D72',
            pointBackgroundColor: '#D14D72',
          },
          {
            label: 'Gewicht',
            segment: {
              borderColor: ctx => colorExample(ctx, 'rgb(192,75,75)'),
              // pointBorderColor: (ctx:ScriptableLineSegmentContext) => pointStyleExample(ctx),
            },
            data: fitnessModelList.getGewichtList(),
            fill: true,
            borderColor: '#A9907E',
            tension: 0.1,
            backgroundColor: '#F3DEBA',
            pointBorderColor: '#675D50',
            pointBackgroundColor: '#675D50',
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        spanGaps: true,
        plugins: {
          legend: {
            position: 'right',
          },
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
              color: (context)=>{return this.getColorLabel(context)},
              // color: function (context) {
                
              //   // if (context.tick.label === "28-05-2023 13:17:06 - Weegschaal thuis") {
              //   if ( context.tick.label === "28-05-2023 13:17:06 - Weegschaal thuis") {
              //       return 'rgba(54, 162, 235, 1)';
              //   }
              //   return '#000000';
              // },
              // backdropColor: function (context) {
              //   // if (context.tick.label === "28-05-2023 13:17:06 - Weegschaal thuis") {
              //   if (context.tick.label === "31-05-2023 08:56:32 - Weegschaal thuis") {
              //       return 'rgba(54, 162, 235, 1)';
              //   }
              //   return '#FF0000';
              // },
              textStrokeWidth: function (context) {
                // if (context.tick.label === "28-05-2023 13:17:06 - Weegschaal thuis") {
                if (context.tick.label === "31-05-2023 08:56:32 - Weegschaal thuis") {
                    return 1;
                }
                return 0;
              },
              textStrokeColor: '#FF6600',
            }
          },
          // xAxis:{
          //   ticks: {
                
          //   }
          // },
        }
      }
    });

    this.myChart.update();

    // const skipped = (ctx: any, value: any) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
    // const skipped: Color | undefined = (ctx: any, value: any) => {
    //   debugger;
    //   return ctx.p0.skip || ctx.p1.skip ? value as Color : undefined;
    // };

    function colorExample(ctx: ScriptableLineSegmentContext, color: string): Color | undefined {
      debugger;
      return ctx.p0.parsed.y > 82 ? color as Color : undefined;
    }

    function pointStyleExample(ctx: ScriptableLineSegmentContext): string {
      debugger;
      return 'Point Style: ' + 'circle';
    }
  }

  private queryNeedsUpdate(): boolean {
    const latestResourceDateTime = this.query?.getdateTimeLatestResourceFromProfile();
    if (latestResourceDateTime && latestResourceDateTime.length > 0) {
      return this.myProfile.dateTimeLatestResource !== latestResourceDateTime;
    }
    return false;
  }

  private getXNumbers(): number[] {
    const listOfNumbers: number[] = [];
    for (let i = 0; i < 100; i++) {
      listOfNumbers.push(
        parseFloat("" + Math.floor(Math.random() * (100 - 70 + 1) + 70) + "." + Math.floor(Math.random() * (100 - 70 + 1) + 70))
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
