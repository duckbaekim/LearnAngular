import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';

const routes: Routes = [
  {
    path: 'stopwatch',
    component:StopwatchComponent
  },
  {
    path: 'clock',
    component:ClockComponent
  }
];

@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent, 
  ],
  imports: [
    CommonModule,
    StopwatchModule,
    RouterModule.forChild(routes) // 라우터 모듈 사용하기 위해 임포트 루트 모듈아니기에 child 추가
  ],
  exports:[
    RouterModule,
    SectionComponent
  ]
})
export class SectionModule { }
