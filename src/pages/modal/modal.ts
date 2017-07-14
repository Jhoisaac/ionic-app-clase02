import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  cerrarParams() {
    let data = {
      nombre: 'Julio',
      edad: 24,
      coords: {
        lat: 10,
        lng: -10
      }
    }

    this.viewCtrl.dismiss(data);
  }

  cerrarNoParams() {
    this.viewCtrl.dismiss();
  }

}
