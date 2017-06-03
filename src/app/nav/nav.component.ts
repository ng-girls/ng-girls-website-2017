import { Component, OnInit } from '@angular/core';

@Component({
  moduleId :module.id,
  selector: 'ngg-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }
  fullImagePath : string = '/assets/images';

  ngOnInit() {
   
  }

}
