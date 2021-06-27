import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CharacterModel } from 'src/app/shared/models/character.model';
import { CharacterService } from 'src/app/shared/services/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.scss']
})
export class CharacterPageComponent implements OnInit {

  character: CharacterModel = {} as CharacterModel;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    const charId = this.route.snapshot.paramMap.get('id');

    if (charId && !isNaN(+charId)) {
      this.characterService.find(+charId).pipe(
        take(1)
      ).subscribe(characterResponse => {
        this.character = characterResponse.data.results[0];
      });
    }
  }

}
