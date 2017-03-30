import { IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppModules } from '../modules';

import { RootReducer } from './app.store';
import { MyApp } from './app.component';


import { SetupViewModule } from './views/+setup';
import { HomeViewModule } from './views/+home';

const ViewModules = [
	SetupViewModule,
	HomeViewModule
];

export const ApplicationImports = [
	IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__magicdb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    StoreModule.provideStore(RootReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    AppModules.forRoot(),
    ...ViewModules
];