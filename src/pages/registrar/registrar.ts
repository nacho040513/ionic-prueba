import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  alertCtrl: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }
  registra(){
    const alert = this.alertCtrl.create({
      title: 'Registrado con Exio',
      subTitle: 'Por favor inicie sesion',
      buttons: ['OK']      
    },
    this.navCtrl.push(HomePage)
    );
    alert.present();
    
  }
}
