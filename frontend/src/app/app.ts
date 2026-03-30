import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatGridListModule,
    HeaderComponent,
    ProfilePictureComponent,
    AboutComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
