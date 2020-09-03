import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faUserCircle,faGlobe, faPhone,faSave,faTimes,faIdCard } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { Usuario } from '../../../shared/models/usuario';
import swal from 'sweetalert2';
import {Country} from '@angular-material-extensions/select-country'; 


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
  
  faUserCircle=faUserCircle;
  faGlobe=faGlobe;
  faPhone=faPhone;
  faSave=faSave;
  faTimes=faTimes;
  formUsuario:FormGroup;
  faIdCard=faIdCard;
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
      telefono:['',[Validators.required, Validators.pattern("^[0-9]*$")]],
      identification:['',[Validators.required]],
    
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
    let iso=(Object.values(this.usuario.nacionalidad)[3]);
    switch(iso){
      case "4": 
         this.usuario.prefijo="93" 
      break;
      case "248": 
         this.usuario.prefijo="358" 
      break;
      case "8": 
         this.usuario.prefijo="355" 
      break;
      case "12": 
         this.usuario.prefijo="213" 
      break;
      case "16": 
         this.usuario.prefijo="1-684" 
      break;
      case "20": 
         this.usuario.prefijo="376" 
      break;
      case "24": 
         this.usuario.prefijo="244" 
      break;
      case "660": 
         this.usuario.prefijo="1-264" 
      break;
      case "10": 
         this.usuario.prefijo="672" 
      break;
      case "28": 
         this.usuario.prefijo="1-268" 
      break;
      case "32": 
         this.usuario.prefijo="54" 
      break;
      case "51": 
         this.usuario.prefijo="374" 
      break;
      case "533": 
         this.usuario.prefijo="297" 
      break;
      case "36": 
         this.usuario.prefijo="61" 
      break;
      case "40": 
         this.usuario.prefijo="43" 
      break;
      case "31": 
         this.usuario.prefijo="994" 
      break;
      case "44": 
         this.usuario.prefijo="1-242" 
      break;
      case "48": 
         this.usuario.prefijo="973" 
      break;
      case "50": 
         this.usuario.prefijo="880" 
      break;
      case "52": 
         this.usuario.prefijo="1-246" 
      break;
      case "112": 
         this.usuario.prefijo="375" 
      break;
      case "56": 
         this.usuario.prefijo="32" 
      break;
      case "84": 
         this.usuario.prefijo="501" 
      break;
      case "204": 
         this.usuario.prefijo="229" 
      break;
      case "60": 
         this.usuario.prefijo="1-441" 
      break;
      case "64": 
         this.usuario.prefijo="975" 
      break;
      case "68": 
         this.usuario.prefijo="591" 
      break;
      case "70": 
         this.usuario.prefijo="387" 
      break;
      case "72": 
         this.usuario.prefijo="267" 
      break;
      case "74": 
         this.usuario.prefijo="47" 
      break;
      case "76": 
         this.usuario.prefijo="55" 
      break;
      case "92": 
         this.usuario.prefijo="1-284" 
      break;
      case "86": 
         this.usuario.prefijo="246" 
      break;
      case "96": 
         this.usuario.prefijo="673" 
      break;
      case "100": 
         this.usuario.prefijo="359" 
      break;
      case "854": 
         this.usuario.prefijo="226" 
      break;
      case "108": 
         this.usuario.prefijo="257" 
      break;
      case "116": 
         this.usuario.prefijo="855" 
      break;
      case "120": 
         this.usuario.prefijo="237" 
      break;
      case "124": 
         this.usuario.prefijo="1" 
      break;
      case "132": 
         this.usuario.prefijo="238" 
      break;
      case "136": 
         this.usuario.prefijo="1-345" 
      break;
      case "140": 
         this.usuario.prefijo="236" 
      break;
      case "148": 
         this.usuario.prefijo="235" 
      break;
      case "152": 
         this.usuario.prefijo="56" 
      break;
      case "156": 
         this.usuario.prefijo="86" 
      break;
      case "344": 
         this.usuario.prefijo="852" 
      break;
      case "446": 
         this.usuario.prefijo="853" 
      break;
      case "162": 
         this.usuario.prefijo="61" 
      break;
      case "166": 
         this.usuario.prefijo="61" 
      break;
      case "170": 
         this.usuario.prefijo="57" 
      break;
      case "174": 
         this.usuario.prefijo="269" 
      break;
      case "178": 
         this.usuario.prefijo="242" 
      break;
      case "180": 
         this.usuario.prefijo="243" 
      break;
      case "184": 
         this.usuario.prefijo="682" 
      break;
      case "188": 
         this.usuario.prefijo="506" 
      break;
      case "384": 
         this.usuario.prefijo="225" 
      break;
      case "191": 
         this.usuario.prefijo="385" 
      break;
      case "192": 
         this.usuario.prefijo="53" 
      break;
      case "196": 
         this.usuario.prefijo="357" 
      break;
      case "203": 
         this.usuario.prefijo="420" 
      break;
      case "208": 
         this.usuario.prefijo="45" 
      break;
      case "262": 
         this.usuario.prefijo="253" 
      break;
      case "212": 
         this.usuario.prefijo="1-767" 
      break;
      case "214": 
         this.usuario.prefijo="1-809" 
      break;
      case "218": 
         this.usuario.prefijo="593" 
      break;
      case "818": 
         this.usuario.prefijo="20" 
      break;
      case "222": 
         this.usuario.prefijo="503" 
      break;
      case "226": 
         this.usuario.prefijo="240" 
      break;
      case "232": 
         this.usuario.prefijo="291" 
      break;
      case "233": 
         this.usuario.prefijo="372" 
      break;
      case "231": 
         this.usuario.prefijo="251" 
      break;
      case "238": 
         this.usuario.prefijo="500" 
      break;
      case "234": 
         this.usuario.prefijo="298" 
      break;
      case "242": 
         this.usuario.prefijo="679" 
      break;
      case "246": 
         this.usuario.prefijo="358" 
      break;
      case "250": 
         this.usuario.prefijo="33" 
      break;
      case "254": 
         this.usuario.prefijo="594" 
      break;
      case "258": 
         this.usuario.prefijo="689" 
      break;
      case "260": 
         this.usuario.prefijo="262" 
      break;
      case "266": 
         this.usuario.prefijo="241" 
      break;
      case "270": 
         this.usuario.prefijo="220" 
      break;
      case "268": 
         this.usuario.prefijo="995" 
      break;
      case "276": 
         this.usuario.prefijo="49" 
      break;
      case "288": 
         this.usuario.prefijo="233" 
      break;
      case "292": 
         this.usuario.prefijo="350" 
      break;
      case "300": 
         this.usuario.prefijo="30" 
      break;
      case "304": 
         this.usuario.prefijo="299" 
      break;
      case "308": 
         this.usuario.prefijo="1-473" 
      break;
      case "312": 
         this.usuario.prefijo="590" 
      break;
      case "316": 
         this.usuario.prefijo="1-671" 
      break;
      case "320": 
         this.usuario.prefijo="502" 
      break;
      case "831": 
         this.usuario.prefijo="44" 
      break;
      case "324": 
         this.usuario.prefijo="224" 
      break;
      case "624": 
         this.usuario.prefijo="245" 
      break;
      case "328": 
         this.usuario.prefijo="592" 
      break;
      case "332": 
         this.usuario.prefijo="509" 
      break;
      case "334": 
         this.usuario.prefijo="672" 
      break;
      case "336": 
         this.usuario.prefijo="379" 
      break;
      case "340": 
         this.usuario.prefijo="504" 
      break;
      case "348": 
         this.usuario.prefijo="36" 
      break;
      case "352": 
         this.usuario.prefijo="354" 
      break;
      case "356": 
         this.usuario.prefijo="91" 
      break;
      case "360": 
         this.usuario.prefijo="62" 
      break;
      case "364": 
         this.usuario.prefijo="98" 
      break;
      case "368": 
         this.usuario.prefijo="964" 
      break;
      case "372": 
         this.usuario.prefijo="353" 
      break;
      case "833": 
         this.usuario.prefijo="44" 
      break;
      case "376": 
         this.usuario.prefijo="972" 
      break;
      case "380": 
         this.usuario.prefijo="39" 
      break;
      case "388": 
         this.usuario.prefijo="1-876" 
      break;
      case "392": 
         this.usuario.prefijo="81" 
      break;
      case "832": 
         this.usuario.prefijo="44" 
      break;
      case "400": 
         this.usuario.prefijo="962" 
      break;
      case "398": 
         this.usuario.prefijo="7" 
      break;
      case "404": 
         this.usuario.prefijo="254" 
      break;
      case "296": 
         this.usuario.prefijo="686" 
      break;
      case "408": 
         this.usuario.prefijo="850" 
      break;
      case "410": 
         this.usuario.prefijo="82" 
      break;
      case "414": 
         this.usuario.prefijo="965" 
      break;
      case "417": 
         this.usuario.prefijo="996" 
      break;
      case "418": 
         this.usuario.prefijo="856" 
      break;
      case "428": 
         this.usuario.prefijo="371" 
      break;
      case "422": 
         this.usuario.prefijo="961" 
      break;
      case "426": 
         this.usuario.prefijo="266" 
      break;
      case "430": 
         this.usuario.prefijo="231" 
      break;
      case "434": 
         this.usuario.prefijo="218" 
      break;
      case "438": 
         this.usuario.prefijo="423" 
      break;
      case "440": 
         this.usuario.prefijo="370" 
      break;
      case "442": 
         this.usuario.prefijo="352" 
      break;
      case "807": 
         this.usuario.prefijo="389" 
      break;
      case "450": 
         this.usuario.prefijo="261" 
      break;
      case "454": 
         this.usuario.prefijo="265" 
      break;
      case "458": 
         this.usuario.prefijo="60" 
      break;
      case "462": 
         this.usuario.prefijo="960" 
      break;
      case "466": 
         this.usuario.prefijo="223" 
      break;
      case "470": 
         this.usuario.prefijo="356" 
      break;
      case "584": 
         this.usuario.prefijo="692" 
      break;
      case "474": 
         this.usuario.prefijo="596" 
      break;
      case "478": 
         this.usuario.prefijo="222" 
      break;
      case "480": 
         this.usuario.prefijo="230" 
      break;
      case "175": 
         this.usuario.prefijo="262" 
      break;
      case "484": 
         this.usuario.prefijo="52" 
      break;
      case "583": 
         this.usuario.prefijo="691" 
      break;
      case "498": 
         this.usuario.prefijo="373" 
      break;
      case "492": 
         this.usuario.prefijo="377" 
      break;
      case "496": 
         this.usuario.prefijo="976" 
      break;
      case "499": 
         this.usuario.prefijo="382" 
      break;
      case "500": 
         this.usuario.prefijo="1-664" 
      break;
      case "504": 
         this.usuario.prefijo="212" 
      break;
      case "508": 
         this.usuario.prefijo="258" 
      break;
      case "104": 
         this.usuario.prefijo="95" 
      break;
      case "516": 
         this.usuario.prefijo="264" 
      break;
      case "520": 
         this.usuario.prefijo="674" 
      break;
      case "524": 
         this.usuario.prefijo="977" 
      break;
      case "528": 
         this.usuario.prefijo="31" 
      break;
      case "530": 
         this.usuario.prefijo="599" 
      break;
      case "540": 
         this.usuario.prefijo="687" 
      break;
      case "554": 
         this.usuario.prefijo="64" 
      break;
      case "558": 
         this.usuario.prefijo="505" 
      break;
      case "562": 
         this.usuario.prefijo="227" 
      break;
      case "566": 
         this.usuario.prefijo="234" 
      break;
      case "570": 
         this.usuario.prefijo="683" 
      break;
      case "574": 
         this.usuario.prefijo="672" 
      break;
      case "580": 
         this.usuario.prefijo="1-670" 
      break;
      case "578": 
         this.usuario.prefijo="47" 
      break;
      case "512": 
         this.usuario.prefijo="968" 
      break;
      case "586": 
         this.usuario.prefijo="92" 
      break;
      case "585": 
         this.usuario.prefijo="680" 
      break;
      case "275": 
         this.usuario.prefijo="970" 
      break;
      case "591": 
         this.usuario.prefijo="507" 
      break;
      case "598": 
         this.usuario.prefijo="675" 
      break;
      case "600": 
         this.usuario.prefijo="595" 
      break;
      case "604": 
         this.usuario.prefijo="51" 
      break;
      case "608": 
         this.usuario.prefijo="63" 
      break;
      case "612": 
         this.usuario.prefijo="870" 
      break;
      case "616": 
         this.usuario.prefijo="48" 
      break;
      case "620": 
         this.usuario.prefijo="351" 
      break;
      case "630": 
         this.usuario.prefijo="1" 
      break;
      case "634": 
         this.usuario.prefijo="974" 
      break;
      case "638": 
         this.usuario.prefijo="262" 
      break;
      case "642": 
         this.usuario.prefijo="40" 
      break;
      case "643": 
         this.usuario.prefijo="7" 
      break;
      case "646": 
         this.usuario.prefijo="250" 
      break;
      case "652": 
         this.usuario.prefijo="590" 
      break;
      case "654": 
         this.usuario.prefijo="290" 
      break;
      case "659": 
         this.usuario.prefijo="1-869" 
      break;
      case "662": 
         this.usuario.prefijo="1-758" 
      break;
      case "663": 
         this.usuario.prefijo="590" 
      break;
      case "666": 
         this.usuario.prefijo="508" 
      break;
      case "670": 
         this.usuario.prefijo="1-784" 
      break;
      case "882": 
         this.usuario.prefijo="685" 
      break;
      case "674": 
         this.usuario.prefijo="378" 
      break;
      case "678": 
         this.usuario.prefijo="239" 
      break;
      case "682": 
         this.usuario.prefijo="966" 
      break;
      case "686": 
         this.usuario.prefijo="221" 
      break;
      case "688": 
         this.usuario.prefijo="381" 
      break;
      case "690": 
         this.usuario.prefijo="248" 
      break;
      case "694": 
         this.usuario.prefijo="232" 
      break;
      case "702": 
         this.usuario.prefijo="65" 
      break;
      case "703": 
         this.usuario.prefijo="421" 
      break;
      case "705": 
         this.usuario.prefijo="386" 
      break;
      case "90": 
         this.usuario.prefijo="677" 
      break;
      case "706": 
         this.usuario.prefijo="252" 
      break;
      case "710": 
         this.usuario.prefijo="27" 
      break;
      case "239": 
         this.usuario.prefijo="500" 
      break;
      case "": 
         this.usuario.prefijo="" 
      break;
      case "728": 
         this.usuario.prefijo="211" 
      break;
      case "724": 
         this.usuario.prefijo="34" 
      break;
      case "144": 
         this.usuario.prefijo="94" 
      break;
      case "736": 
         this.usuario.prefijo="249" 
      break;
      case "740": 
         this.usuario.prefijo="597" 
      break;
      case "744": 
         this.usuario.prefijo="47" 
      break;
      case "748": 
         this.usuario.prefijo="268" 
      break;
      case "752": 
         this.usuario.prefijo="46" 
      break;
      case "756": 
         this.usuario.prefijo="41" 
      break;
      case "760": 
         this.usuario.prefijo="963" 
      break;
      case "158": 
         this.usuario.prefijo="886" 
      break;
      case "762": 
         this.usuario.prefijo="992" 
      break;
      case "834": 
         this.usuario.prefijo="255" 
      break;
      case "764": 
         this.usuario.prefijo="66" 
      break;
      case "626": 
         this.usuario.prefijo="670" 
      break;
      case "768": 
         this.usuario.prefijo="228" 
      break;
      case "772": 
         this.usuario.prefijo="690" 
      break;
      case "776": 
         this.usuario.prefijo="676" 
      break;
      case "780": 
         this.usuario.prefijo="1-868" 
      break;
      case "788": 
         this.usuario.prefijo="216" 
      break;
      case "792": 
         this.usuario.prefijo="90" 
      break;
      case "795": 
         this.usuario.prefijo="993" 
      break;
      case "796": 
         this.usuario.prefijo="1-649" 
      break;
      case "798": 
         this.usuario.prefijo="688" 
      break;
      case "800": 
         this.usuario.prefijo="256" 
      break;
      case "804": 
         this.usuario.prefijo="380" 
      break;
      case "784": 
         this.usuario.prefijo="971" 
      break;
      case "826": 
         this.usuario.prefijo="44" 
      break;
      case "840": 
         this.usuario.prefijo="1" 
      break;
      case "581": 
         this.usuario.prefijo="1" 
      break;
      case "858": 
         this.usuario.prefijo="598" 
      break;
      case "860": 
         this.usuario.prefijo="998" 
      break;
      case "548": 
         this.usuario.prefijo="678" 
      break;
      case "862": 
         this.usuario.prefijo="58" 
      break;
      case "704": 
         this.usuario.prefijo="84" 
      break;
      case "850": 
         this.usuario.prefijo="1-340" 
      break;
      case "876": 
         this.usuario.prefijo="681" 
      break;
      case "732": 
         this.usuario.prefijo="212" 
      break;
      case "887": 
         this.usuario.prefijo="967" 
      break;
      case "894": 
         this.usuario.prefijo="260" 
      break;
      case "716": 
         this.usuario.prefijo="263" 
      break;

    }
    this.usuario.nacionalidad = (Object.values(this.usuario.nacionalidad)[0]);
    console.log(this.usuario.nacionalidad);
    /*console.log(nacion)
    let nacion2 = (JSON.stringify(nacion));
    console.log(nacion2[2]);*/
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
