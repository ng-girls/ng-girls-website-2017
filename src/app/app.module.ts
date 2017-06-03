import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OrganizeTeamComponent } from './organize-team/organize-team.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { BeAPartComponent } from './be-apart/be-apart.component';
import { PartnersComponent } from './partners/partners.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrganizeTeamComponent,
    NavComponent,
    AboutComponent,
    BeAPartComponent,
    PartnersComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
