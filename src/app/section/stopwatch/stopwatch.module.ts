import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ButtonsComponent, 
    TimeDisplayComponent, 
    StopwatchComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    StopwatchComponent,
  
  ]
})
export class StopwatchModule { }
