import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { interval } from 'rxjs';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
timeString:any;
  constructor() { 
    interval(1000)
    .pipe(map(()=>{
        return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
    .subscribe(data=>{
      this.timeString = data;
    })
    // setInterval(()=>{
    // },1000)
    //템플릿 바인드시 메소드를 바인드 하지 말자 컴포넌트의 변화가 일어날시 리렌더링 발생 또한 예측 불가능 코드
  //때문에 rxjs 방식 사용 (추후 공부하세요)
  }
  
  getCurrentTime(){
    // console.log('asdfasdffads')
    let currentTime = moment().format('YYYY-MM-DD HH:mm:ss')
    return currentTime;
  }
  ngOnInit(): void {
  }

}
