import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData:string;

  test = 1;
  constructor() { 
    setInterval(()=>{
      this.test++;
    },1000)
    this.inputData = '';
    
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
    for(let propName in changes){
      
    }
  }
  
}
