import {Cuarto} from './cuarto';
import {Usuario} from './usuario'
export class Habitacion {
    idhabitacion:string;
    fecha_entrada:string;
    fecha_salida:string;
    num_cuarto:string;
    observaciones:string;
    idusuario:string;
    idcuarto:string; 
    cuarto?:Cuarto;
    usuario?:Usuario;
    

}
