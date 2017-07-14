import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { PokedexPage } from '../pokedex/pokedex';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  pokedex: any = PokedexPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

  irPokedex() {
    this.navCtrl.push(PokedexPage);
  }

  mostrarMenu() {
    this.menuCtrl.toggle();
  }

}
