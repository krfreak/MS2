import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController } from 'ionic-angular';
import { LinksPage } from '../links/links';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { FilterPage } from '../filter/filter';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  goToPage(page){
    switch(page){
      case 'links':
        this.navCtrl.push(LinksPage);
      break;
      case 'settings':
        this.navCtrl.push(SettingsPage);
      break;
      case 'filter':
        this.navCtrl.push(FilterPage);
      break;
      case 'about':
        this.navCtrl.push(AboutPage);
      break;
    }
  }

  launch(url) {
    window.open(encodeURI(url), '_system');
  }

}
