import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item-card',
  templateUrl: './list-item-card.component.html',
  styleUrls: ['./list-item-card.component.scss']
})
export class ListItemCardComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';
  @Input() imgSrc = '';
  @Input() itemId = 0;
  @Input() routeUrl = [''];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToItemPage(): void {
    this.router.navigate(this.routeUrl);
  }
}
