import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { Usuario } from '../../../shared/models/usuario';
import swal from 'sweetalert2';
import { mobiscroll, MbscSelectOptions } from '@mobiscroll/angular';
mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light'
};

const remoteData = {
  url: 'https://trial.mobiscroll.com/content/countries.json',
  type: 'json'
};

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  filter: string;
    group: string;
    desktopFilter: string;
    desktopGroup: string;

    filterSettings: MbscSelectOptions = {
        display: 'bubble',
        data: remoteData,
        filter: true,
        group: {
            groupWheel: false,
            header: false
        },
        width: 400
    };
    groupSettings: MbscSelectOptions = {
        display: 'bubble',
        data: remoteData,
        group: true,
        width: [40, 240]
    };
    desktopFilterSettings: MbscSelectOptions = {
        display: 'bubble',
        touchUi: false,
        data: remoteData,
        filter: true,
        group: {
            groupWheel: false,
            header: false
        },
        width: 400
    };

    desktopGroupSettings: MbscSelectOptions = {
        display: 'bubble',
        touchUi: false,
        data: remoteData,
        group: true
    };
  faUserCircle=faUserCircle;
  faGlobe=faGlobe;
  faPhone=faPhone;
  faSave=faSave;
  faTimes=faTimes;
  formUsuario:FormGroup;

  submitted = false;
  @Input() usuario: Usuario;    
  @Input() title:String;
  @Output() flagToReload = new EventEmitter<Boolean>();

  constructor(private userService:UserService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formUsuario=this.formBuilder.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      nacionalidad:['',[Validators.required]],
      telefono:['',[Validators.required]]
    });
  }

  get f(){
    return this.formUsuario.controls;
  }

  onReset():void{
    this.formUsuario.reset();
    this.submitted=false;
  }

  onSubmit():void{
    this.submitted=true;

    if(this.formUsuario.invalid){
      console.log('Formulario invalido');
      return;
    }

    this.userService.save(this.usuario).subscribe(
      result=>{
        this.submitted=false;
        if(result.icon==="success"){
          console.log("Flag form success");
          swal.fire(result);
          this.flagToReload.emit(true);
          return;
       
        }

        swal.fire(result);
      }
    )
    
  }
  
}
