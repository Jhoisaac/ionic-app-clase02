import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokemonPage } from '../pokemon/pokemon';

@IonicPage()
@Component({
  selector: 'page-pokedex',
  templateUrl: 'pokedex.html',
})
export class PokedexPage {
  pokedex: any[] = [
    {
      nombre: 'Charizard',
      poder: 'Lanza Llamas',
    },
    {
      nombre: 'Blastoise',
      poder: 'Hidrogen',
    },
    {
      nombre: 'Venusaur',
      poder: 'Rayo Solar',
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PokedexPage');
  }

  verPokemon(pokemon: any) {
    this.navCtrl.push(PokemonPage, {'parametro': pokemon});
  }
}
