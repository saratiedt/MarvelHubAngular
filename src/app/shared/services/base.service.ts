import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../models/response.model';

export abstract class BaseService<T> {

  protected baseUrl: string;

  protected constructor(
    protected http: HttpClient,
    protected endpoint: string
  ) {
    this.baseUrl = `${environment.marvel_base_url}/${this.endpoint}`;
  }

  public list(): Observable<ResponseModel<T>> {
    return this.http.get<any>(this.baseUrl);
  }

  public find(id: number): Observable<ResponseModel<T>> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
