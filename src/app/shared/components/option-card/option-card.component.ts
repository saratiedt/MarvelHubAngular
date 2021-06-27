import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-card',
  templateUrl: './option-card.component.html',
  styleUrls: ['./option-card.component.scss']
})
export class OptionCardComponent implements OnInit {

  @Input() title = '';
  @Input() img = 'iron-man';

  constructor() { }

  ngOnInit(): void {
  }

}
