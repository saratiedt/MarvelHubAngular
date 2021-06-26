import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export abstract class BaseService {

  protected baseUrl: string;

  protected constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) {
    this.baseUrl = `${environment.marvel_base_url}/${this.endpoint}`;
  }

  public list(): Observable<object> {
    return this.http.get(this.baseUrl);
  }

  public find(id: number): Observable<object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

}
