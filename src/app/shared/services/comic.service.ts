import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { ComicModel } from '../models/comic.model';

@Injectable({providedIn: 'root'})
export class ComicService extends BaseService<ComicModel>{
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'comics');
  }
}
