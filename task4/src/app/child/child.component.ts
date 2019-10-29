import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  constructor() { }
  
  @Output() public childEvent= new EventEmitter();

  public sendEvent()
  {
    this.childEvent.emit('I am Child');
  }
 
 
  

  ngOnInit() {
  }

}
