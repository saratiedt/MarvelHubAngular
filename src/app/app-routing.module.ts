import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterPageComponent } from './modules/characters/character-page/character-page.component';
import { CharactersComponent } from './modules/characters/characters.component';
import { ComicPageComponent } from './modules/comics/comic-page/comic-page.component';
import { ComicsComponent } from './modules/comics/comics.component';
import { EventsPageComponent } from './modules/events/events-page/events-page.component';
import { EventsComponent } from './modules/events/events.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharacterPageComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/:id', component: ComicPageComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventsPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
