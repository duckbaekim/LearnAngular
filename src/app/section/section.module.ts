import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TimeDisplayComponent } from './time-display/time-display.component';



@NgModule({
  declarations: [
    SectionComponent, 
     ButtonsComponent, 
     TimeDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SectionComponent
  ]
})
export class SectionModule { }
