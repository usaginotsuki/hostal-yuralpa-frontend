import { Pipe, PipeTransform } from '@angular/core';
import { faEye, faPencilAlt, faTrash, faCamera } from '@fortawesome/free-solid-svg-icons';


@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {
  faCamera=faCamera;
  faEye=faEye;
  faPencilAlt=faPencilAlt;
  faTrash=faTrash;
  
  transform(value:boolean) {
    return value === true ? `<p>Si<\p>` : 'No';
  }

}
