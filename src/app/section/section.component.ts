import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
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
