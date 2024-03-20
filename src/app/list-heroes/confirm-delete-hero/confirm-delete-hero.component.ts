import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete-hero',
  templateUrl: './confirm-delete-hero.component.html',
  styleUrls: ['./confirm-delete-hero.component.css']
})
export class ConfirmDeleteHeroComponent {

  constructor(public dialogRef: MatDialogRef<ConfirmDeleteHeroComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
