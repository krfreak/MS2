// import { } from './lectures';
import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CommunicationModule } from './communication';

import { LecturesModule, LecturesEffects, LecturesReducer } from './lectures';
import { MessagesModule, MessagesEffects, MessagesReducer } from './messages';

export const RootReducer = Object.assign({},
  LecturesReducer,
  MessagesReducer
);

const Effects = [
  EffectsModule.run(LecturesEffects),
  EffectsModule.run(MessagesEffects)
];

const RootModules = [
  CommunicationModule.forRoot(),
  LecturesModule.forRoot(),
  MessagesModule.forRoot()
];

@NgModule({
  imports: [
    ...Effects,
    ...RootModules
  ],
  exports: [
  ]
})
export class AppModules {
  static forRoot(providers: Provider[] = []): ModuleWithProviders {
    return {
      ngModule: AppModules,
      providers: [
        ...providers
      ]
    }
  }
}

export * from './communication';
export * from './lectures';