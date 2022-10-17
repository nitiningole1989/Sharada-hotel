import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BookTableComponent } from './book-table/book-table.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component: HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"event", component:EventsComponent},
  {path:"menu", component:MenuComponent},
  {path:"gallery", component:GalleryComponent},
  {path:"contact", component:ContactComponent},
  {path:"booktable", component: BookTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
