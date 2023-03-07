import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { AlbumsPageComponent } from './albums-page/albums-page.component';

@NgModule ({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    AlbumsPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
