import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { EventModel } from 'src/app/shared/models/event.model';
import { EventService } from 'src/app/shared/services/event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit, OnDestroy{

  event: EventModel = {} as EventModel;
  routeSubscription: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.loadEventData(params['id']);
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }


  loadEventData(id: number) {
    if (id && !isNaN(+id)) {
      this.eventService.find(+id).pipe(
        take(1)
      ).subscribe(eventResponse => {
        this.event = eventResponse.data.results[0];
      });
    }
  }

  goToEvent(eventURI: string): void {
    const url = [];
    url.push(this.getEventURL(eventURI))
    this.router.navigate(url);
  }

  getEventURL(eventURI: string): string | undefined {
    const splittedString = eventURI.split('/');
    return 'events/' + splittedString.pop();
  }

}
