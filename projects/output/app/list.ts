import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list',
  template: `
  	<div class="list">
  		<p *ngFor="let item of list">
  			Element: {{item}}
  			<button (click)="onClick(item)">Highlight</button>
  		</p>
  	</div>
  `
})

export class ListComponent {
  public list = ['tech.io', 'is', 'so', 'cool'];

  @Output()
  public highlight = new EventEmitter();

  public onClick(item) {
  	this.highlight.next(item);
  }
}
