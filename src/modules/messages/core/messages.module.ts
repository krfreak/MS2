import { NgModule, ModuleWithProviders } from '@angular/core';

import { Service } from './messages.service';

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