import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TimeTablePage } from '../timetable/timetable';
import { MessagesPage } from '../messages/messages';
import { ProgressPage } from '../progress/progress';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TimeTablePage;
  tab2Root: any = MessagesPage;
  tab3Root: any = ProgressPage;
  tab4Root: any = HomePage;

  constructor() {

  }
}
