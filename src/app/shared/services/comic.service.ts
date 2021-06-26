import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ComicService extends BaseService{
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'comics');
  }
}
