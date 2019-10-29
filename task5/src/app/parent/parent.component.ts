import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  public message;
  @Output() public parentEvent = new EventEmitter();

  reroute(message)
  {
    this.parentEvent.emit(message);
  }
  
 

  constructor() { }

  ngOnInit() {
  }

}
