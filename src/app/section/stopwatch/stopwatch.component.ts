import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {
  present: string;

  startTime(time:string){
    this.present = time;
  }
  
  constructor() {
    this.present = 'welcome'
  }

  ngOnInit(): void {
  }

}