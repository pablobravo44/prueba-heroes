import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListHeroPageComponent } from './list-hero-page/list-hero-page.component';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { ConfirmDeleteHeroComponent } from './confirm-delete-hero/confirm-delete-hero.component';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    ListHeroPageComponent,
    HeroCardComponent,
    ConfirmDeleteHeroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class ListHeroesModule { }
