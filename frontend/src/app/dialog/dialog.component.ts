import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { form, FormField, maxLength } from '@angular/forms/signals';

export interface DialogData {
  title: string;
  bodyText?: string;
  placeholder?: string;
  maxLength?: number;
  required?: boolean;
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FormField,
  ],
})
export class DialogComponent {
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  data = inject<DialogData>(MAT_DIALOG_DATA);

  dialogModel = signal({
    bodyText: this.data.bodyText || '',
  });

  form = form(this.dialogModel, (schema) => {
    if (this.data.maxLength) {
      maxLength(schema.bodyText, this.data.maxLength);
    }
  });

  submit() {
    this.dialogRef.close(this.form.bodyText().value());
  }
}
