import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NavController } from 'ionic-angular';
import { LinksPage } from '../links/links';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html'
})
export class SetupPage {

  constructor(public navCtrl: NavController) {
  }

  @ViewChild(Slides) slides: Slides;
  public query : string = 'slide1';

  showdata(){
    if(this.query == 'slide1')
    {
      this.slides.slideTo(0,0);
    }
    if(this.query == 'slide2')
    {
      this.slides.slideTo(1,0);
    }
  }

  slideChanged(){
    if(this.slides._activeIndex == 0){
      this.query = 'slide1';
    }
    if(this.slides._activeIndex == 1){
      this.query = 'slide2';
    }
  }
}
