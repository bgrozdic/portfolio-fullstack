import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Skill {
  id: string;
  name: string;
  isFavorite: boolean;
  orderIndex: number | null;
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  private readonly api = '/api/skill';
  private readonly http = inject(HttpClient);

  getAll(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.api);
  }

  create(data: Partial<Skill>) {
    return this.http.post<Skill>(this.api, data);
  }

  update(id: string, data: Partial<Skill>) {
    return this.http.put<Skill>(`${this.api}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
