import { Habitacion } from 'src/app/shared/models/habitacion';

export class Servicio {
    idservicio?:string;
    servicio:string;
    costo:string;
    fecha:Date;
    detalle:string;
    num_habitacion:string;
    habitacion:Habitacion;
}
