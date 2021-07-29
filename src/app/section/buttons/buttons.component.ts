import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  count = 0;

  //이벤트리스터 생성  //아웃풋은 컴포넌트의 이벤틀를 발생 시킬 수 있는 형태를 취하도록 도와줌
  @Output() clickEvent = new EventEmitter<string>(); 

  constructor() { }
  start(){ 
    this.clickEvent.emit('change'); //부모 객체가 이벤트를 기다리다 해당 버튼 선택시 데이터를 받을 수 있다.
  }
  stop($event:MouseEvent){ 
    this.count++
  }
  reset($event:MouseEvent){ 
    this.count++
  }
  ngOnInit(): void {
  }

}
