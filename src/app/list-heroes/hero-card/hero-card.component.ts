import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteHeroComponent } from '../confirm-delete-hero/confirm-delete-hero.component';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent {

  @Input () hero: any;
  @Output() deleteItem = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openConfirmDeleteDialog(itemID: number): void {
    const dialogRef = this.dialog.open(ConfirmDeleteHeroComponent, {
      width: '250px',
      data: { itemId: itemID }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteItem.emit(itemID);
      }
    });
  }
}
