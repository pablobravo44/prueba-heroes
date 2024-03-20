import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroPageComponent } from './create-heroes/create-hero-page/create-hero-page.component';
import { EditHeroPageComponent } from './edit-heroes/edit-hero-page/edit-hero-page.component';
import { ListHeroPageComponent } from './list-heroes/list-hero-page/list-hero-page.component';
import { AboutComponent } from './common/components/about/about.component';

const routes: Routes = [
  { path: '', component: ListHeroPageComponent },
  { path: 'create-hero', component: CreateHeroPageComponent },
  { path: 'edit-hero/:id', component: EditHeroPageComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
