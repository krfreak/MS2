import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { AboutView } from './about.view';


const internalComponents = [
]

const components = [
  AboutView
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
export class AboutViewModule {
}

export * from './about.view';