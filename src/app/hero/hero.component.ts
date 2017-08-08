//*! Author: Orit Kozolin */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngg-hero',
  template: `
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <!--- <p> --->
    <!---   hero Works! --->
    <!--- </p> --->
    
      <div class="flex-container">
        <div class="hero-img">
            <div class="logo logo-big"></div>
            <div class="logo logo-name"></div>
            <div class="hero-text">
                <p> Upcoming workshops: </p>
                <p> June 18th, 2017, Warsaw, Poland </p>
                <p> June 26th, 2017, Tel-Aviv, Israel</p>
            </div>
            <div class="hero-btn">
                <a href=" /JS-Poland/ " class="btn btn-primary waves-button">
                ngGirls @ JS-Poland</a>
                <a href=" /TLV-June-2017/ " class="btn btn-primary waves-button">
                ngGirls TLV</a>
            </div>
        </div>
        <a href="#about" class="explore">
            <svg class="icon icon-arrow-down" viewBox="0 0 32 32">
                <use xlink:href="/assets/img/sprites.svg#icon-arrow-down"></use>
            </svg>
        </a>
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
