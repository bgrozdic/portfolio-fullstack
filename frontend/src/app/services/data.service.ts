import { Injectable, inject } from '@angular/core';
import { forkJoin, map, shareReplay } from 'rxjs';
import { AboutService } from './about.service';
import { ExperienceService } from './experience.service';
import { SkillService } from './skill.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private aboutService = inject(AboutService);
  // private experienceService = inject(ExperienceService);
  // private skillService = inject(SkillService);
  // data$ = forkJoin({
  //   about: this.aboutService.getAbout(),
  //   experiences: this.experienceService.getAll(),
  //   skills: this.skillService.getAll(),
  // }).pipe(
  //   shareReplay(1), // ✅ cache latest value
  // );
  // about$ = this.data$.pipe(map((d) => d.about));
  // experiences$ = this.data$.pipe(map((d) => d.experiences));
  // skills$ = this.data$.pipe(map((d) => d.skills));
}
