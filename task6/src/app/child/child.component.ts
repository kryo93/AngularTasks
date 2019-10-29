import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() public eventSend = new EventEmitter();

  sendEvent()
  {
    this.eventSend.emit("Mai Baccha hu");
  }
  constructor() { }

  ngOnInit() {
  }

}
