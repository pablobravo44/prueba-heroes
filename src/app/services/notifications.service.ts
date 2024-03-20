import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private snackBar: MatSnackBar) { }

  successNotification(msg: string): void {
    this.snackBar.open(msg, 'Cerrar', {
      duration: 3000,
    });
  }
}
