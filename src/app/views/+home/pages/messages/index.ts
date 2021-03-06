import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { MessagesPage } from './messages.page';


const internalComponents = [
]

const components = [
  MessagesPage
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
export class MessagesPageModule {
}

export * from './messages.page';