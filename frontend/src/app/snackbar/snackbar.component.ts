import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface SnackbarInterface {
  message: string;
  type?: 'success' | 'error' | 'info';
}

@Component({
  selector: 'app-snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrl: 'snackbar.component.scss',
  imports: [],
})
export class SnackbarComponent {
  data = inject<SnackbarInterface>(MAT_SNACK_BAR_DATA);
}
