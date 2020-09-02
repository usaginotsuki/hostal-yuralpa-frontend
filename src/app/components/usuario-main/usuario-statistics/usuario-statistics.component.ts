import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import {Usuario} from '../../../shared/models/usuario';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-usuario-statistics',
  templateUrl: './usuario-statistics.component.html',
  styleUrls: ['./usuario-statistics.component.css']
})
export class UsuarioStatisticsComponent implements OnInit {
  // Pie
  usuarios:Usuario[];
  nacionalidades=[];
  a=[];
  b=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void{
    this.list();
    this.getNaciones();
  }
  list() : void {
    this.userService.list(1,100).subscribe(
      result => {        
        this.usuarios = result;   
        this.getNaciones();
                
      }
    );
    return;
  }
  getNaciones():void{
    console.log("inicio naciones");
    console.log(this.usuarios.length)
    for (var i in this.usuarios){
      this.nacionalidades[i]=this.usuarios[i].nacionalidad
    }

    var arr=[], prev;

    arr=this.nacionalidades.sort();
    for ( var j = 0; j < arr.length; j++ ) {
        if ( arr[j] !== prev ) {
            this.a.push(arr[j]);
            this.b.push(1);
        } else {
            this.b[this.b.length-1]++;
        }
        prev = arr[j];
    }

    return;
  }

  // events


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
  public pieChartLabels: Label[] =this.a;
  public pieChartData: number[] = this.b;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    { fontColor: 'black',
      backgroundColor: ['rgba(255,0,0,0.6)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)', 'rgba(159,50,50,0.3)', 'rgba(50,170,205,0.3)', 'rgba(179,255,0,0.3)', 'rgba(255,87,87,0.3)', 'rgba(251,0,255,0.6)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

}