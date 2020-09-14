import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ComidaService } from 'src/app/core/services/comida.service';
import { Comida } from 'src/app/shared/models/comida';

@Component({
  selector: 'app-comida-statistics',
  templateUrl: './comida-statistics.component.html',
  styleUrls: ['./comida-statistics.component.css']
})

export class ComidaStatisticsComponent implements OnInit {

   comida:Comida[]
   datos:any[];
   desayunos:any[]=[];
   almuerzos:any[]=[];
   meriendas:any[]=[];
   constructor(private comidaService:ComidaService) { }

   ngOnInit(): void {
      this.list();
   }

   list() : void {
      this.comidaService.list(1,100).subscribe(
        result => {        
            this.comida = result;   
            this.getDatos();
        }
      );
      return;
   }

   getDatos():void{
      let aux:Comida;
      let value:number;
      let mes;
      let fecha;
      let a=0, b=0,c=0;
      const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
      "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
      ];
      console.log("Datos")
      console.log(this.comida)
      console.log(this.comida.length)
      for(let month in monthNames){
         let valueDesayuno=0;
         let valueAlmuerzo=0;
         let valueMerienda=0;
         for(let meal in this.comida){
            aux=this.comida[meal];
            value=(aux.acomms.length)
            fecha=(aux.fecha).split("-");
            mes=parseInt(fecha[1])
            mes=monthNames[mes]
            if(mes==monthNames[month]){
               console.log("el dato es de "+mes)
               if(aux.comida=="Desayuno"){
                  valueDesayuno=valueDesayuno+value;
               }
               if(aux.comida=="Almuerzo"){
                  valueAlmuerzo=valueAlmuerzo+value;
               }
               if(aux.comida=="Merienda"){
                  valueMerienda=valueMerienda+value;
               }
            }   
         }
         console.log()
         if(valueDesayuno!=0){
            this.desayunos[a]={
               "name":monthNames[month],
               "value":valueDesayuno,
            }
            a++;
         }
         if(valueAlmuerzo!=0){
            this.almuerzos[b]={
               "name":monthNames[month],
               "value":valueAlmuerzo,
            }
            b++;
         }
         if(valueMerienda!=0){
            this.meriendas[c]={
               "name":monthNames[month],
               "value":valueMerienda,
            }
            c++;
         }
         
      }
      console.log(this.desayunos)
      this.datos=[
         {
            "name":"Desayunos",
            "series":this.desayunos,
         },
         {
            "name":"Almuerzos",
            "series":this.almuerzos,
         },
         {
            "name":"Meriendas",
            "series":this.meriendas,
         }
      ]

      console.log(this.datos);
   }
   
   view: any[] = [700, 400];
 
   // options
   showXAxis: boolean = true;
   showYAxis: boolean = true;
   gradient: boolean = true;
   showLegend: boolean = true;
   showXAxisLabel: boolean = true;
   xAxisLabel: string = 'Comida';
   showYAxisLabel: boolean = true;
   yAxisLabel: string = 'Cantidad';
   legendTitle: string = 'Mes';
 
   colorScheme = {
     domain: ['#5AA454', '#C7B42C', '#AAAAAA']
   };
 
 
 /* onSelect(data): void {
     console.log('Item clicked', JSON.parse(JSON.stringify(data)));
   }
 
   onActivate(data): void {
     console.log('Activate', JSON.parse(JSON.stringify(data)));
   }
 
   onDeactivate(data): void {
     console.log('Deactivate', JSON.parse(JSON.stringify(data)));
   }
 */


}
