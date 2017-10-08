import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadComponent } from './read.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ReadComponent
  ],
  exports:[
    ReadComponent
  ]
})
export class ReadModule { }
