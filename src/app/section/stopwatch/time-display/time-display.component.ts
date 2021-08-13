import { Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData:string;

  min:number = 0;
  sec: number = 0;
  ms: number = 0;
  timeInterval:any;

  //이벤트리스터 생성  //아웃풋은 컴포넌트의 이벤틀를 발생 시킬 수 있는 형태를 취하도록 도와줌
  @Output() clickEvent = new EventEmitter<string>(); 
  executeButton(command:string){ 
    this.clickEvent.emit(command); //부모 객체가 이벤트를 기다리다 해당 버튼 선택시 데이터를 받을 수 있다.
  }

  constructor() { 
    this.inputData = '';
    
  }
  timeStart(){
    this.timeStop()
    this.timeInterval = setInterval(()=>{
      this.ms++;
    },10)
  }

  timeStop(){
    clearInterval(this.timeInterval);
  }

  timeReset(){
    this.timeStop();
    this.ms = 0;
  }
  
  ngOnInit(): void {
  }


  ngOnChanges(changes:SimpleChanges){
    for(let propName in changes){
      if(propName=="inputData" && changes[propName].currentValue =="start"){
        this.timeStart();
      }
      if(propName=="inputData" && changes[propName].currentValue =="stop"){
        this.timeStop();
      }      
      if(propName=="inputData" && changes[propName].currentValue =="reset"){
        this.timeReset();
      }      
    }
  }
  
}
