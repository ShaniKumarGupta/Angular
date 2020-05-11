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

  imgUrl: String = "./assets/images/171500308.jpg";

  // Create User Object

  User = {
    Name1 : "Aman Kumar",
    Course1 : "B.Pharma",
    College1 : "GLA University",
    Address1 : "L-512 Hindalco Colony",
  }


  constructor() { }

  ngOnInit(): void {
  }

}
