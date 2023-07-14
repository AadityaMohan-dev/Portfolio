import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './about/about/about.component';
import { DataComponent } from './data/data/data.component';
import { ContactComponent } from './contact/contact/contact.component';
import { RightNavComponent } from './nav/right-nav/right-nav.component';
import { LeftNavComponent } from './nav/left-nav/left-nav.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"data",component:DataComponent},
  {path:"contact",component:ContactComponent},
  {path:"rb",component:RightNavComponent},
  {path:"lb",component:LeftNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
