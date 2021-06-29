import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CharacterModel } from '../shared/models/character.model';
import { ResponseModel } from '../shared/models/response.model';
import { CharacterService } from '../shared/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters$ = new Observable<ResponseModel<CharacterModel>>();

  constructor(
    private characterService: CharacterService
  ) {
  }

  ngOnInit(): void {
    this.characters$ = this.characterService.list();
  }

  searchForCharacter(search: string): void {
    console.log('searching for:' + search);
    this.characters$ = this.characterService.searchForCharacter(search);
  }
}
