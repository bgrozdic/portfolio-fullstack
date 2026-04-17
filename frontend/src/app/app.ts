import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProfilePictureComponent,
    AboutComponent,
    ExperienceComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
