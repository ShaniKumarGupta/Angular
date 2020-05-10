import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {
  
  Name: String = "Shani Kumar Gupta";
  UniversityName: String = "GLA University";
  Course: String = "B.Tech";
  Branch: String = "Computer Science";
  UniversityRoll: Number = 171500308;
  Address = "HH-321 Hindalco Colony Renukoot";


  constructor() { }

  ngOnInit(): void {
  }

}
