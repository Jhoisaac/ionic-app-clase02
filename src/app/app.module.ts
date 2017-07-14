import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { PokemonPage } from '../pages/pokemon/pokemon';
import { PokedexPage } from '../pages/pokedex/pokedex';
import { PrincipalPage } from '../pages/principal/principal';
import { TabsPage } from "../pages/tabs/tabs";
import {AjustesPage} from "../pages/ajustes/ajustes";
import {ModalPage} from "../pages/modal/modal";
import {PopupPage} from "../pages/popup/popup";
import {Ajustes2Page} from "../pages/ajustes2/ajustes2";

@NgModule({
  declarations: [
    MyApp,
    PokemonPage,
    PokedexPage,
    PrincipalPage,
    TabsPage,
    AjustesPage,
    ModalPage,
    PopupPage,
    Ajustes2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
    PokedexPage,
    PokemonPage,
    TabsPage,
    AjustesPage,
    ModalPage,
    PopupPage,
    Ajustes2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
