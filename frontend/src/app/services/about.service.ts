import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface About {
  id: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class AboutService {
  private readonly http = inject(HttpClient);
  private api = '/api/about';

  list(): Observable<About> {
    return this.http.get<About>(this.api);
  }

  update(about: About): Observable<About> {
    return this.http.put<About>(this.api, about);
  }
}
