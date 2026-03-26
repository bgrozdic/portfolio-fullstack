import { DOCUMENT, inject, Injectable, signal } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly theme = signal<Theme>('light');

  constructor() {
    this.setTheme(this.getThemeFromLocalStorage());
  }

  toggleTheme() {
    this.setTheme(this.theme() === 'light' ? 'dark' : 'light');
  }

  setTheme(theme: Theme) {
    this.theme.set(theme);
    // remove theme class (if there is any) to avoid any errors before adding
    this.document.body.classList.remove('light-mode', 'dark-mode');
    this.document.body.classList.add(`${theme}-mode`);

    this.setThemeInLocalStorage(theme);
  }

  setThemeInLocalStorage(theme: Theme) {
    localStorage.setItem('preffered-theme', theme);
  }

  getThemeFromLocalStorage() {
    return (localStorage.getItem('preffered-theme') as Theme) ?? 'light';
  }
}
