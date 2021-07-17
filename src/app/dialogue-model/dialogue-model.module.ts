import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertViewComponent } from './alert-view/alert-view.component';



@NgModule({
  declarations: [AlertViewComponent],
  imports: [
    CommonModule
  ],
  exports:[AlertViewComponent]
})
export class DialogueModelModule { }
