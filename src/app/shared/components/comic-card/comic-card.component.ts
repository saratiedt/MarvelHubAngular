import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicModel } from '../../models/comic.model';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss']
})
export class ComicCardComponent implements OnInit {

  @Input() comic: ComicModel = {} as ComicModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToComicPage(): void {
    this.router.navigate(['comics/' + this.comic.id]);
  }
}
