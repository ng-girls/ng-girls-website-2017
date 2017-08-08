import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngg-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],

})
export class AboutComponent implements OnInit {
  public aboutTitle = 'About ngGirls';

  public abouts = [
    {
      title: 'motivation',
      imgSrc: 'motivation.png',
      text: `ngGirls aims to introduce women to the world of technology and increase the diversity. 
      Angular is a great technology to start with. We believe this is a win-win situation!`
    }, {
      title: 'operation',
      imgSrc: 'operation.png',
      text: `We plan various events and activities in which the participants build and deploy 
      a web application with Angular. We offer guidance to help finding a job in front end development.`
    }, {
      title: 'participation',
      imgSrc: 'participation.png',
      text: `If you're a committed, motivated woman who wants to step into the Web Development world - 
      your place is with us!`
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
