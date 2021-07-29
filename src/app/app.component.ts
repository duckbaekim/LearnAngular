import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //태그 네임
  templateUrl: './app.component.html', //html 파일
  styleUrls: ['./app.component.scss'] //css 파일 이 배열에 있는 css만 적용된다.
})
export class AppComponent {
  title = 'front-end';
}
