import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from '../app/app.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import {BeAPartComponent} from './be-apart/be-apart.component';
import {OrganizeTeamComponent} from './organize-team/organize-team.component'; 
import {PartnersComponent} from './partners/partners.component'; 


const routes: Routes = [
  {

    path: 'home', component: HomeComponent

  }
  ,
  {
    path: 'about', component: AboutComponent

  },
   {
    path: 'beApart', component: BeAPartComponent

  },
    {
    path: 'team', component: OrganizeTeamComponent

  },
     {
    path: 'partners', component: PartnersComponent

  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'

  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
