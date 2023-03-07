import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot ([
      { path: '', component: HomePageComponent },
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
