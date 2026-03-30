import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { About, AboutService } from '../services/about.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { EMPTY, switchMap } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { form, maxLength } from '@angular/forms/signals';
import { JsonPipe } from '@angular/common';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-about',
  imports: [
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  private readonly aboutService = inject(AboutService);
  private readonly dialog = inject(MatDialog);
  private readonly snackbar = inject(SnackbarService);
  public loading = signal(true);

  aboutModel = signal<About>({
    id: '',
    content: '',
  });

  aboutForm = form(this.aboutModel, (schemaPath) => {
    maxLength(schemaPath.content, 50);
  });

  ngOnInit() {
    this.aboutService.list().subscribe((about) => {
      this.aboutForm.id().value.set(about.id);
      this.aboutForm.content().value.set(about.content);
      this.loading.set(false);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: 'About me',
        bodyText: this.aboutForm.content().value(),
        placeholder: 'Maximal 50 characters',
        maxLength: 50,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === null) return; // stop everything on cancel

      this.aboutForm.content().value.set(result);
      this.aboutService
        .update({
          id: this.aboutForm.id().value(),
          content: result.trim(),
        })
        .subscribe({
          next: () => this.snackbar.success('Saved!'),
          error: () => this.snackbar.error('Failed to save'),
        });
    });
  }
}
