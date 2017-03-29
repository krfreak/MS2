import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SetupPage } from '../setup/setup';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController) {

  }

  goToSetup(){
    this.navCtrl.push(SetupPage);
  }

  clearData(){
    // TODO: logic
  }

}
