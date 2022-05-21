import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ComicModel } from 'src/app/shared/models/comic.model';
import { ResponseModel } from 'src/app/shared/models/response.model';
import { ComicService } from 'src/app/shared/services/comic.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics$ = new Observable<ResponseModel<ComicModel>>();

  constructor(
    private comicService: ComicService
  ) {
  }

  ngOnInit(): void {
    this.comics$ = this.comicService.list();
  }

  searchForComic(search: string): void {
    this.comics$ = this.comicService.searchForComic(search);
  }
}
