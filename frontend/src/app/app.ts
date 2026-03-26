import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatGridListModule, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('frontend');
}
