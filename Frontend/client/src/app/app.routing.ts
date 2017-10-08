//  criando rotas.

import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AddComponent} from './add/add.component';
import {DeletComponent} from './delet/delet.component';
import {ReadComponent} from './read/read.component';

const APP_ROUTES: Routes =[
  {path: 'delete' , component: DeletComponent},
  {path: 'cadastrar' , component: AddComponent},
  {path: 'listar' , component: ReadComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
