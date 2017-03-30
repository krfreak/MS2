import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, Slides } from 'ionic-angular';
import { LinksPage } from '../links/links';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { Lecture } from '../../models/lecture-model';
import { MessageService } from '../../providers/message-service/message-service';

@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
  providers:  [MessageService]
})
export class SetupPage {
  public sliderOptions = { pager: true };

  private isMaster: boolean = false;

  public terms: Lecture[][] = [];

  public get filteredTerms() {
    return this.terms.filter(lectures => !!lectures.filter(lecture => lecture.isMaster === this.isMaster).length);
  }

  constructor(public navCtrl: NavController, public storage: Storage, public msgService: MessageService) {
    this.fetchLectures();
  }

  public trackByIndex(index, term) {
    return index;
  }

  public fetchLectures(){
    this.msgService.getLectures().then((data) => {
      this.terms = data.reduce((terms: Lecture[][], lecture) => {
        let semester = lecture.semester - 1;
        terms[semester] = (terms[semester] || []);
        terms[semester].push(lecture);
        return terms;
      }, []);
    });
  }

  public setMaster(state: boolean = true) {
    this.isMaster = state;
  }

  public getLecturesFromTerm(index: number) {
    return this.terms[index]? this.terms[index].filter(lecture => lecture.isMaster === this.isMaster): [];
  }

  saveSchedule(){

  }

  @ViewChild(Slides) slides: Slides;
  public query : string = 'slide1';

  showData(){
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
    if(this.slides.getActiveIndex() == 0){
      this.query = 'slide1';
    }
    if(this.slides.getActiveIndex() == 1){
      this.query = 'slide2';
    }
  }

  goToTabView(){
    this.storage.ready().then(()=>{
      this.storage.set("init", true);
      this.storage.set("setupDone", true);
    })
    this.navCtrl.setRoot(TabsPage);
  }
}
