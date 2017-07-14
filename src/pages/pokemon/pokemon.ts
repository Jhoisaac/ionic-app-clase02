/**
 * Created by jh0n4 on 6/7/17.
 */
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pokemon',
  templateUrl: 'pokemon.html'
})
export class PokemonPage {
  pokemon: any = {};
  pokemonUrl: any = '';

  constructor(public navCtrl: NavController, public _navParams: NavParams) {
    console.log(_navParams);
    this.pokemon = this._navParams.get('parametro');
  }

  regresar() {
    this.navCtrl.pop();
  }

  regresarRoot() {
    this.navCtrl.popToRoot();
  }
}
