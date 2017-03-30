import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { HomeView } from './home.view';


const internalComponents = [
]

const components = [
  HomeView
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule
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