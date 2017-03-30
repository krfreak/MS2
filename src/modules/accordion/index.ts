import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { AccordionComponent } from './accordion.component';
import { AccordionTabComponent } from './components';
import { AccordionTabContentDirective, AccordionTabLabelDirective } from './directives';

const components = [
  AccordionComponent,
  AccordionTabComponent
];

const directives = [
  AccordionTabContentDirective,
  AccordionTabLabelDirective,
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [
    ...components,
    ...directives
  ],
  exports: [
    ...components,
    ...directives
  ]
})
export class AccordionModule { }
