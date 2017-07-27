import { Component } from '@angular/core';

/**
 * The root component of the project, contains the root outlet.
 * Any other component (including header and footer) should be loaded via the router or routed components.
 */
@Component({
  selector: 'ngg-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
