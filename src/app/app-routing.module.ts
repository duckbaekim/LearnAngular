import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'stopwatch',
    pathMatch: 'full' //full 일시 정확하게, prefix시 접두사 맞을시 like % 같음
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //루트 모듈 등록 
  exports: [RouterModule]
})
export class AppRoutingModule { }
