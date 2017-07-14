import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { PrincipalPage } from '../pages/principal/principal';
import { TabsPage } from '../pages/index.pages';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  // rootPage:any = PrincipalPage;
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  irPagina(pagina: any) {
    this.rootPage = pagina;
    this.menuCtrl.close();
  }
}

