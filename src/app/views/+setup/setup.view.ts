import { Component, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { Platform, NavController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LecturesService, Lecture } from '../../../modules';

import { HomeView } from '../+home';

@Component({
  selector: 'setup-view',
  templateUrl: './setup.view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
  ],
})
export class SetupView {

  private _activeTabIndex: number = 0;

  public get activeTabIndex() {
    return this._activeTabIndex.toString();
  } 

  public get bachelorSemesters$() {
    return this.lecturesService.bachelorSemesters$;
  }

  public get masterSemesters$() {
    return this.lecturesService.masterSemesters$;
  }

  @ViewChild(Slides) 
  public slides: Slides;

  constructor(private lecturesService: LecturesService, private navController: NavController, private storage: Storage) {}

  public trackByIndex(index: number, lectures: Lecture[]) {
    return index;
  }

  public trackById(index: number, lecture: Lecture) {
    return lecture.id;
  }

  public onTabChanged(slides: Slides) {
    this._activeTabIndex = slides.getActiveIndex();
  }

  public changeTab(event: any) {
    let index = parseInt(event.value);
    this.slides.slideTo(index, 0);
  }

  public toggleLecture(event: any, lecture: Lecture) {
    let isChecked = event.checked;
    if(isChecked) {
      this.lecturesService.select(lecture);
    } else {
      this.lecturesService.deselect(lecture);
    }
  }

  public onSetupDone() {
    this.storage.ready().then(()=>{
      this.storage.set("init", true);
      this.storage.set("setupDone", true);
    })
    this.navController.setRoot(HomeView);
  }
}