//*! Author: Orit Kozolin */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngg-hero',
  template: `
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <p>
      hero Works!
    </p>
    <div class="flex-container">
      <div class="hero-image" width="128" height="128">
        <div class="hero-logos row">
          <img id="logo-big"  src="../assets/img/logo_big.png" alt="logo-big" width="128" height="128">
          <img id="logo-name"  src="../assets/img/logoname.png" alt="logo-name" width="128" height="128">
        </div>
        <div class="hero-text">
          <p> Upcoming workshops: </p>
          <p> June 18th, 2017, Warsaw, Poland </p>
          <p> June 26th, 2017, Tel-Aviv, Israel</p>
        </div>
       
      </div>
       
    </div>
    <div class="flex-container">
      <div class="row">
          <a href=" /JS-Poland/ " class="flex-item btn btn-primary waves-button">ngGirls @ JS-Poland</a>
          <a href=" /TLV-June-2017/ " class="flex-item btn btn-primary waves-button">ngGirls TLV</a>
        </div>
    </div>
           <!-- End Hero Section -->
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
