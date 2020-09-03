import {Cuarto} from './cuarto';
import {Usuario} from './usuario'
export class Habitacion {
    idhabitacion?:string;
    fecha_entrada:Date;
    fecha_salida:Date;
    num_cuarto:string;
    observaciones:string;
    cuarto:Cuarto;
    usuario:Array<Usuario>=[];
    

}
