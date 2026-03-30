import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Experience {
  id: string;
  title: string | null;
  type: string | null;
  description: string | null;
  startDate: string | null;
  endDate: string | null;
  techStack: string | null;
  createdAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private readonly api = '/api/experience';
  private readonly http = inject(HttpClient);

  getAll(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.api);
  }

  create(data: Partial<Experience>) {
    return this.http.post<Experience>(this.api, data);
  }

  update(id: string, data: Partial<Experience>) {
    return this.http.put<Experience>(`${this.api}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
