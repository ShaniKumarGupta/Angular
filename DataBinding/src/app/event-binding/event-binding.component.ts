import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  msg:string = "";
  msg1:string = "";

  onAddCart(){
    this.msg = "Product is added into cart";
  }

  onInputClick(event){
    console.log(event.target.value);
  }

  onAddCart1(event){
    this.msg1 = event.target.value + " added in your cart";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
