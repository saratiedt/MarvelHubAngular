import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/shared/models/event.model';
import { ResponseModel } from 'src/app/shared/models/response.model';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events$ = new Observable<ResponseModel<EventModel>>();

  constructor(
    private eventService: EventService
  ) {
  }

  ngOnInit(): void {
    this.events$ = this.eventService.list();
  }

  searchEventName(titleName: string): void {
    this.events$ = this.eventService.searchForEventName(titleName);
  }
}
