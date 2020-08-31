import { Habitacion } from './habitacion';

export class Comida {
    idcomida?:string;
    comida:string;
    costo:string;
    fecha:string;
    observaciones:string;
    acomms:Array<Habitacion>=[];
    

}
