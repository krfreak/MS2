import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { MessagesPage } from '../pages/messages/messages';
import { TimeTablePage } from '../pages/timetable/timetable';
import { LinksPage } from '../pages/links/links';
import { SetupPage } from '../pages/setup/setup';
import { ProgressPage } from '../pages/progress/progress';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { FilterPage } from '../pages/filter/filter';
import { NewMessagePage } from '../pages/new-message/new-message';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MessagesPage,
    NewMessagePage,
    ProgressPage,
    SetupPage,
    TimeTablePage,
    LinksPage,
    HomePage,
    TabsPage,
    FilterPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__magicdb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
  })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MessagesPage,
    NewMessagePage,
    ProgressPage,
    SetupPage,
    TimeTablePage,
    LinksPage,
    HomePage,
    TabsPage,
    FilterPage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
