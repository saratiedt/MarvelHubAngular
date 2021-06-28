import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarvelInterceptor } from './shared/interceptors/marvel.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterPageComponent } from './characters/character-page/character-page.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicPageComponent } from './comics/comic-page/comic-page.component';
import { ListItemCardComponent } from './shared/components/list-item-card/list-item-card.component';
import { HomeOptionCardComponent } from './home/home-option-card/home-option-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent,
    CharactersComponent,
    CharacterPageComponent,
    ComicsComponent,
    ComicPageComponent,
    ListItemCardComponent,
    HomeOptionCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MarvelInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
