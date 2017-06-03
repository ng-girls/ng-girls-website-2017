import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngg-about',
  template: `
    <p>
      about Works!
    </p>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
