import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { CreatorModel } from '../models/creator.model';

@Injectable({ providedIn: 'root' })
export class CreatorService extends BaseService<CreatorModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'creators');
  }
}
