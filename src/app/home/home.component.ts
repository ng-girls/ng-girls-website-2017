﻿import { Component, OnInit } from '@angular/core';

/**
 * The homepage of ngGirls.
 * Shall have its own header with links to its sections
 * and links to the different events
 */
@Component({
  selector: 'ngg-home',
  template: `
    <p>
      <ngg-partners></ngg-partners>
    </p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
