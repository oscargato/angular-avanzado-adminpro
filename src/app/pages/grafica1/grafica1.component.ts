import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
//import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})

export class Grafica1Component {

  public doughnutChartLabels:string [] = ['Download Sales','In-Store Sales','Mail-Order Sales'];
  public doughnutChartData: number[] = [350,450,100];
  public doughnutChartType:string = 'doughnut';
}
