import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { SetupPage } from '../pages/setup/setup';
import { TabsPage } from '../pages/tabs/tabs';
import { MessageService } from '../providers/message-service/message-service';
import { Lecture } from '../models/lecture-model';

import { SetupView } from './views/+setup';
import { HomeView } from './views/+home';
@Component({
  templateUrl: 'app.html',
  providers: [MessageService]
})
export class MyApp {
  public rootPage: any;

  constructor(platform: Platform, public storage: Storage, public msgService: MessageService) {
    this.storage.ready().then(()=>{
      this.storage.get("init").then((data) => {
        this.rootPage =  data?  TabsPage : SetupView;
      });
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
