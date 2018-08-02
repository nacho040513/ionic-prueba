import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
//import { FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
 // formularioUsuario:FormGroup;
  
  //formulario:any;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
    
   /** this.formularioUsuario = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      clave: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      confirclave: ['', [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
      correo: ['', [Validators.required, Validators.email]],
      confircorreo: ['', [Validators.required, Validators.email]],

    }); */
    //this.formulario={};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  
  registra(){
    const alert = this.alertCtrl.create({
      title: 'Registrado con Exio',
      subTitle: 'Por favor inicie sesion',
      buttons: ['OK']
    });
    alert.present();
    
  }
}
