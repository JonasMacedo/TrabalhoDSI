// modulo raiz
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';

import {MenuComponent} from './menu/menu.component';
import {ReadModule} from './read/read.module';
import {DeletModule} from './delet/delet.module';
import {AddModule} from './add/add.module';
import {RouterModule, Routes} from '@angular/router';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    ModalModule.forRoot(),
    ReadModule,
    DeletModule,
    AddModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
