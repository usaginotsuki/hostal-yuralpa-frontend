import {Cuarto} from './cuarto';
import {Usuario} from './usuario'
export class Habitacion {
    idhabitacion:string;
    nombre: string;
    num_cuarto:number;
    fecha_reservacion:Date;
    num_dias:number;
    cuarto:Cuarto;
    usuario:Usuario;
    

}
