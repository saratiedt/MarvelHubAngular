import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { EventModel } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService extends BaseService<EventModel> {
  constructor(private httpClient: HttpClient) {
    super(httpClient, 'events');
  }
}
