import { Component, OnInit, inject, signal } from '@angular/core';
import { ExperienceService, Experience } from '../services/experience.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { SnackbarService } from '../services/snackbar.service';
import { MatStep, MatStepper } from '@angular/material/stepper';
import { MatCard } from '@angular/material/card';
import { DatePipe } from '@angular/common';

@Component({
  imports: [MatStep, MatStepper, MatCard, DatePipe],
  selector: 'app-experience',
  styleUrl: './experience.component.scss',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {}
