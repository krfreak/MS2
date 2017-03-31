import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { HomeView } from './home.view';

import { MessagesPageModule, MenuPageModule, AboutPageModule, SchedulePageModule } from './pages';

const internalComponents = [
]

const components = [
  HomeView
];

const pageModules = [
  MessagesPageModule,
  MenuPageModule,
  AboutPageModule,
  SchedulePageModule
]

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ...pageModules
  ],
  declarations: [
    ...internalComponents,
    ...components
  ],
  entryComponents: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class HomeViewModule {
}

export * from './home.view';
export * from './pages';