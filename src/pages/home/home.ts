import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { AlertController } from 'ionic-angular';
//import { FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  email : any;
  login:any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    //this.login={};
  }

  ingresar(){
    const alert = this.alertCtrl.create({
      title: 'Mantenimiento',
      subTitle: 'Por favor ingresar mas tarde',
      buttons: ['OK']
    });
    alert.present();
    
  }
  pageregistra(){
  this.navCtrl.push(RegistrarPage)      
  }
  recuperar(){
    let alert = this.alertCtrl.create({
      title:'Restablecer Contraseña',
      subTitle:'Por favor ingrese su correo electronico de registro',
      inputs:[{
        name:this.email,
        placeholder:'Correo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log(this.email);
          }
        },
        {
          text: 'Recuperar',
          handler: data => {
            console.info(this.confirecuperar());
            
          }
        }
        ]
    });
    alert.present();
  }

 confirecuperar(){
  let alert = this.alertCtrl.create({
    title:'Credenciales Enviadas',
    subTitle:'Por favor siga las instruciones enviadas al correo electronico:',
    message: this.email,
    buttons: ['OK']
  });
  alert.present();
 }
}
