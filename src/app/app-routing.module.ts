import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterPageComponent } from './characters/character-page/character-page.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicPageComponent } from './comics/comic-page/comic-page.component';
import { ComicsComponent } from './comics/comics.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterPageComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: ComicPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
