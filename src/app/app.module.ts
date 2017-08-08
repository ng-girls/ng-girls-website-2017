import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { HeroComponent } from './hero/hero.component';
import { BepartComponent } from './bepart/bepart.component';
=======
import { AboutComponent } from './about/about.component';
>>>>>>> 2390ec7e7f29b25d3a4a60090a419cb786ff8d34

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
<<<<<<< HEAD
    HeroComponent,
    BepartComponent
     ],
=======
    AboutComponent
  ],
>>>>>>> 2390ec7e7f29b25d3a4a60090a419cb786ff8d34
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
