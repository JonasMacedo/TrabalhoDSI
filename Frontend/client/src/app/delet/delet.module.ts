import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletComponent } from './delet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DeletComponent
  ],
  exports:[
    DeletComponent
  ]
})
export class DeletModule { }
