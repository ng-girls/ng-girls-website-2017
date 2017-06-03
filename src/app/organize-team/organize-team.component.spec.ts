import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizeTeamComponent } from './organize-team.component';

describe('OrganizeTeamComponent', () => {
  let component: OrganizeTeamComponent;
  let fixture: ComponentFixture<OrganizeTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizeTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
