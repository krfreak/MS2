import { NgModule } from '@angular/core';
import { IonicApp } from 'ionic-angular';

import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { MessagesPage } from '../pages/messages/messages';
import { TimeTablePage } from '../pages/timetable/timetable';
import { LinksPage } from '../pages/links/links';
import { ProgressPage } from '../pages/progress/progress';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { FilterPage } from '../pages/filter/filter';
import { NewMessagePage } from '../pages/new-message/new-message';
import { AccordionModule } from '../modules/accordion';

import { ApplicationImports } from './app.imports';
import { ApplicationProviders } from './app.providers';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MessagesPage,
    NewMessagePage,
    ProgressPage,
    TimeTablePage,
    LinksPage,
    HomePage,
    TabsPage,
    FilterPage,
    SettingsPage
  ],
  imports: [
    ...ApplicationImports,
    AccordionModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MessagesPage,
    NewMessagePage,
    ProgressPage,
    TimeTablePage,
    LinksPage,
    HomePage,
    TabsPage,
    FilterPage,
    SettingsPage
  ],
  providers: [
    ...ApplicationProviders
  ]
})
export class AppModule {}
