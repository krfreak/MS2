import { NgModule, ModuleWithProviders } from '@angular/core';

import { Service } from './lectures.service';

@NgModule({})
export class Module {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Module,
      providers: [
        Service
      ]
    }
  }
}