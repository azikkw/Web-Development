import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumsDetailComponent } from './albums-detail/albums-detail.component';
import { AblumsPhotosComponent } from './ablums-photos/ablums-photos.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'albums-component', component: AlbumsComponent },
  { path: 'albums-component/:id', component: AlbumsDetailComponent },
  { path: 'albums-component/:id/photos', component: AblumsPhotosComponent },
  { path: '', redirectTo: 'home-component', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
