import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ThemeService } from '../services/theme.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSlideToggleModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private iconRegistry = inject(MatIconRegistry);
  private sanitizer = inject(DomSanitizer);

  constructor() {
    this.iconRegistry.addSvgIcon(
      'angular',
      this.sanitizer.bypassSecurityTrustResourceUrl('angular.svg'),
    );

    this.iconRegistry.addSvgIcon(
      'angular-material',
      this.sanitizer.bypassSecurityTrustResourceUrl('angularmaterial.svg'),
    );

    this.iconRegistry.addSvgIcon(
      'bootstrap',
      this.sanitizer.bypassSecurityTrustResourceUrl('bootstrap.svg'),
    );

    this.iconRegistry.addSvgIcon(
      'nestjs',
      this.sanitizer.bypassSecurityTrustResourceUrl('nest.svg'),
    );
  }
}
