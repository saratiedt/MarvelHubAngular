import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { StorieModel } from '../models/storie.model';

@Injectable({ providedIn: 'root' })
export class StorieService extends BaseService<StorieModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'stories');
  }
}
