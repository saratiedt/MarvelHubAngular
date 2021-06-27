import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type RouteModel = {
  url: string[];
};

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {

  @Input() title = '';
  @Input() img = 'iron-man';
  @Input() route: RouteModel = {url: ['']};

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToRoute(): void {
    console.log('arguments');
    this.router.navigate(this.route.url);
  }

}
