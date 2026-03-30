import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent, SnackbarInterface } from '../snackbar/snackbar.component';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  private snackBar = inject(MatSnackBar);

  open(data: SnackbarInterface) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data,
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  success(message: string) {
    this.open({ message, type: 'success' });
  }

  error(message: string) {
    this.open({ message, type: 'error' });
  }

  info(message: string) {
    this.open({ message, type: 'info' });
  }
}
