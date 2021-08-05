import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ButtonsComponent } from './section/buttons/buttons.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';
import { TestComponent } from './layout/test/test.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({ //앵귤러 제공 api 
  declarations: [  //컴포넌트 들이 들어간다 - 하나의 모듈만 가능 의존성 주입 - 해당 컴포넌트를 앵귤러가 사용할 수 있게 해준다.
    AppComponent, HeaderComponent, FooterComponent, SectionComponent, ButtonsComponent, TimeDisplayComponent
  ],
  imports: [ // 다른 모듈들이 들어온다. import * as moduleName 과 같다.
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [], //뷰가 아닌 서비스 로직
  bootstrap: [AppComponent], //처음 실행할 컴포넌트 지정
  exports:[] //컴포넌트 exoport list, es6 동일
})
export class AppModule { }
