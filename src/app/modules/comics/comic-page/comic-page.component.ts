import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { ComicModel } from 'src/app/shared/models/comic.model';
import { ComicService } from 'src/app/shared/services/comic.service';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.scss']
})
export class ComicPageComponent implements OnInit {

  comic: ComicModel = {} as ComicModel;

  constructor(
    private route: ActivatedRoute,
    private comicService: ComicService
  ) { }

  ngOnInit(): void {
    const charId = this.route.snapshot.paramMap.get('id');

    if (charId && !isNaN(+charId)) {
      this.comicService.find(+charId).pipe(
        take(1)
      ).subscribe(comicResponse => {
        this.comic = comicResponse.data.results[0];
      });
    }
  }

}
