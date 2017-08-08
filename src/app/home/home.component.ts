import { Component, OnInit } from '@angular/core';

/**
 * The homepage of ngGirls.
 * Shall have its own header with links to its sections
 * and links to the different events
 */
@Component({
  selector: 'ngg-home',
  template: `
<<<<<<< HEAD
    <!-- <p> -->
    <!--   home Works! -->
    <!-- </p> -->
    <ngg-hero></ngg-hero>
    <ngg-bepart></ngg-bepart>
=======
    <ngg-about></ngg-about>
>>>>>>> 2390ec7e7f29b25d3a4a60090a419cb786ff8d34
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }


  ngOnInit() {
  }

}
