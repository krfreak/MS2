import { NgModule } from '@angular/core';
import { IonicApp } from 'ionic-angular';

import { MyApp } from './app.component';
import { MessagesPage } from '../pages/messages/messages';
import { LinksPage } from '../pages/links/links';
import { ProgressPage } from '../pages/progress/progress';
import { SettingsPage } from '../pages/settings/settings';
import { FilterPage } from '../pages/filter/filter';
import { NewMessagePage } from '../pages/new-message/new-message';
import { AccordionModule } from '../modules/accordion';

import { ApplicationImports } from './app.imports';
import { ApplicationProviders } from './app.providers';

@NgModule({
  declarations: [
    MyApp,
    MessagesPage,
    NewMessagePage,
    ProgressPage,
    LinksPage,
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
    MessagesPage,
    NewMessagePage,
    ProgressPage,
    LinksPage,
    FilterPage,
    SettingsPage
  ],
  providers: [
    ...ApplicationProviders
  ]
})
export class AppModule {}
