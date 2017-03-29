import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-links',
  templateUrl: 'links.html'
})
export class LinksPage {

  constructor(public navCtrl: NavController) {

  }

  launch(url) {
    window.open(encodeURI(url), '_system');
  }

}
