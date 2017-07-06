import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PartnersService } from 'app/services/partners.service';
import { Group } from './../models/element';
import { environment } from 'environments/environment';

@Component({
    selector: 'ngg-partners',
    providers: [PartnersService],
    template: `<section id="partners" class="partners">
      <div class="content-wrapper">
        <div class="col-lg-10 col-lg-offset-1">
          <h3>{{ title }}</h3>
          <div *ngFor="let partner of partners | async">
            <h5>{{ partner.group }}</h5>
            <ul class="list-inline">
              <li *ngFor="let element of partner.elements" [ngStyle]="{'width': element.width}">
                <a href="{{ element.link }}" target="_blank">
                  <img src="/assets/img/partners/{{ element.imageUrl }}"
                       title="{{ element.description }}"
                       alt="{{ element.name }}">
                </a>
              </li>
            </ul>
          </div>

          <a href="{{ c4sponsorsUrl }}"
             target="_blank"
             class="btn btn-primary waves-effect waves-button waves-light waves-float">{{ c4sponsorsButton }}</a>
        </div>
      </div>
    </section>`,
    styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
    partners: Observable<Array<Group>>;
    c4sponsorsUrl: string = environment.c4sponsorsUrl;
    title: string = environment.partners.title;
    c4sponsorsButton: string = environment.partners.c4sponsorsButton;

    constructor(private partnersService: PartnersService) { }

    ngOnInit() {
        this.partners = this.partnersService.getAllPartners();
    }

}
