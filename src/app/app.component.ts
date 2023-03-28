import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stats-server-viewer';

    // global
    private globalLabels = [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ];
    private globalDataSetA = { data: [ 65, 59, 80, 150, 56, 55, 40 ], label: 'Series A', fill: true, tension: 0.5, borderColor: 'black', backgroundColor: 'rgba(255,0,0,0.3)'};
    private globalDataSetB = { data: [ 28, 48, -40, 19, 86, 27, 90 ], label: 'Series B' };

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
    datasets: [this.globalDataSetA, this.globalDataSetB]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
}
