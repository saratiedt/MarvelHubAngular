import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type RouteModel = {
  url: string[];
};

@Component({
  selector: 'app-home-option-card',
  templateUrl: './home-option-card.component.html',
  styleUrls: ['./home-option-card.component.scss']
})
export class HomeOptionCardComponent implements OnInit {

  @Input() title = '';
  @Input() img = '';
  @Input() route: RouteModel = { url: [''] };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToRoute(): void {
    this.router.navigate(this.route.url);
  }

}
