import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController } from 'ionic-angular';
import { LinksPage } from '../links/links';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {

  constructor(public navCtrl: NavController) {
  }


}
