import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterModel } from '../../models/character.model';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  @Input() character: CharacterModel = {} as CharacterModel;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToCharacterPage(): void {
    this.router.navigate(['characters/' + this.character.id]);
  }
}
