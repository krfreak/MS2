import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { AccordionModule } from '../../../modules/accordion';

import { SetupView } from './setup.view';


const internalComponents = [
]

const components = [
  SetupView
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AccordionModule
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
export class SetupViewModule {
}

export * from './setup.view';