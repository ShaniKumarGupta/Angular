import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  Name: String = "Shani Kumar Gupta";
  College: String = "GLA University";
  type1: String =  "password";
  time1: string = "time";
  color1: String = "color";
  radio1: String = "radio";
  sub: string = "submit";

  constructor() { }

  ngOnInit(): void {
  }

}
