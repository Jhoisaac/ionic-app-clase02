import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController } from 'ionic-angular';

import { ModalPage, PopupPage } from '../index.pages';

/**
 * Generated class for the AjustesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public popupCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjustesPage');
  }

  irModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();

    modal.onDidDismiss(
      result => {
        if (result) {
          console.log(result);
        }
      }
    );
  }

  activarRoot() {
    this.navCtrl.parent.select(1);
  }

  irPop() {
    this.popupCtrl.create(PopupPage);

  }

}
