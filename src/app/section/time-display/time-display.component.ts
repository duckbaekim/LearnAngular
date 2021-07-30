import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

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
  constructor() { 
    this.inputData = '';
    
  }
  timeStart(){
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
