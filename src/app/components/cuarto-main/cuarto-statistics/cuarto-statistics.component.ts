import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Cuarto } from '../../../shared/models/cuarto';
import { CuartoService } from '../../../core/services/cuarto.service';

@Component({
  selector: 'app-cuarto-statistics',
  templateUrl: './cuarto-statistics.component.html',
  styleUrls: ['./cuarto-statistics.component.css']
})
export class CuartoStatisticsComponent implements OnInit {

  cuartos:Cuarto[];
  disponibilidad=[];
  disponibles:number=0;
  ocupadas:number=0;
  constructor(private cuartoService:CuartoService) { }
  public pieChartLabels: Label[] = ['Disponibles','Ocupadas']
  public pieChartData: number[] = [0,0]
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    { fontColor: 'black',
      backgroundColor: [ 'rgba(0,255,0,0.3)','rgba(255,0,0,0.6)', 'rgba(0,0,255,0.3)', 'rgba(159,50,50,0.3)', 'rgba(50,170,205,0.3)', 'rgba(179,255,0,0.3)', 'rgba(255,87,87,0.3)', 'rgba(251,0,255,0.6)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];
  ngOnInit(): void {
    this.list();
    this.getDisponibles();
  }

  list() : void {
    this.cuartoService.list(1,100).subscribe(
      result => {        
        this.cuartos = result;   
        this.getDisponibles();
      }
    );
    return;
  }

  getDisponibles():void
  {
    this.disponibles=0;
    this.ocupadas=0;
    for(let disp in this.cuartos){
      this.disponibilidad[disp]=(this.cuartos[disp].disponibilidad).valueOf();
    }

    for(let cuarto in this.disponibilidad){
      console.log(this.disponibilidad[cuarto])
      if(this.disponibilidad[cuarto]==="false"){
        this.ocupadas=this.ocupadas+1
        console.log(this.disponibilidad[cuarto])
      }
      if(this.disponibilidad[cuarto]==="true"){
        console.log(this.disponibilidad[cuarto])
        this.disponibles=this.disponibles+1
      }
    }
    console.log(this.disponibilidad)
    console.log("dis "+ this.disponibles);
    console.log("ocu "+ this.ocupadas)
    this.pieChartData=[this.disponibles,this.ocupadas]
    return;
  }
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  

}
