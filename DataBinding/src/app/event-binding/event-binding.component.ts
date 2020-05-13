import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  msg:string = "";

  onAddCart(){
    this.msg = "Product is added into cart";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
