import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ButtonsComponent } from './section/buttons/buttons.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';


@NgModule({ //앵귤러 제공 api 
  declarations: [  //컴포넌트 들이 들어간다
    AppComponent, HeaderComponent, FooterComponent, SectionComponent, ButtonsComponent, TimeDisplayComponent,
  ],
  imports: [ // 다른 모듈들이 들어온다.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //뷰가 아닌 서비스 로직
  bootstrap: [AppComponent] //처음 실행할 컴포넌트 지정
})
export class AppModule { }
