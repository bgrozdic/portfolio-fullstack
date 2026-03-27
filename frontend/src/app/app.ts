import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatGridListModule, HeaderComponent, ProfilePictureComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');
}
