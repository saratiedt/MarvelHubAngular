import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { SerieModel } from '../models/serie.model';

@Injectable({ providedIn: 'root' })
export class SerieService extends BaseService<SerieModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'series');
  }
}
