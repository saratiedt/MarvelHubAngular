import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, map, takeWhile, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  isComponentActive = true;
  searchTextValue: FormControl = new FormControl('');

  @Output() searchEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.searchTextValue.valueChanges.pipe(
      takeWhile(() => this.isComponentActive),
      debounceTime(500),
      tap(searchText => this.search(searchText))
    ).subscribe();
  }

  private search(searchText: string): void {
    this.searchEvent.emit(searchText);
  }

  ngOnDestroy(): void {
    this.isComponentActive = false;
  }
}
