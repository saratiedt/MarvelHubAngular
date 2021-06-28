import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { EventModel } from 'src/app/shared/models/event.model';
import { EventService } from 'src/app/shared/services/event.service';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

  event: EventModel = {} as EventModel;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    const charId = this.route.snapshot.paramMap.get('id');

    if (charId && !isNaN(+charId)) {
      this.eventService.find(+charId).pipe(
        take(1)
      ).subscribe(eventResponse => {
        this.event = eventResponse.data.results[0];
      });
    }
  }

}
