import { Component, OnInit } from '@angular/core';
import { IMyOptions } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  public chartType: string = 'line';
  public myDatePickerOptions: IMyOptions = {
    // Your options
  };
  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Time' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Ammount' }
  ];
  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(29, 136, 218, .4)',
      borderColor: 'rgba(29, 136, 218, .7)',
      borderWidth: 2,
      pointRadius: 0
    },
    {
      backgroundColor: 'rgba(23, 102, 162, .4)',
      borderColor: 'rgba(23, 102, 162, .7)',
      borderWidth: 2,
      pointRadius: 0
    }
  ];

  elements: any = [
    {
      id: 1, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 2, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
    {
      id: 3, heading1: 'Cell',
      heading2: 'Cell',
      heading3: 'Cell',
      heading4: 'Cell',
      heading5: 'Cell',
      heading6: 'Cell',
      heading7: 'Cell',
      heading8: 'Cell',
      heading9: 'Cell'
    },
  ];
  headElements = ['ID', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading', 'Heading'];
  


  public chartOptions: any = {
    responsive: true,

  };
  public optionsSelect: Array<any>;

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor() { }

  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Today' },
      { value: '2', label: 'Last 7 days' },
      { value: '3', label: 'Last 30 days' },
    ];
  }

  updateOnlyDatasets() {
    const firstChartData = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    const secondChartData = [
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 10),
    ];
    // This line will update only data in your Chart
    this.chartDatasets = [
      { data: firstChartData },
      { data: secondChartData },
    ];
  }

}
