import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';

@Injectable({ providedIn: 'root' })
export class EventService extends BaseService {
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'events');
  }
}
