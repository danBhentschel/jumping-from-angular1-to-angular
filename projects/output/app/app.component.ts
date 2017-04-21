import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
  	<div class="app">
        <list (highlight)="onHighlight($event)"></list>
        <div class="result" *ngIf="lastElement">You pressed highlight on element "{{lastElement}}"</div>
    </div>
  `
})
export class AppComponent {
  public lastElement;

  public onHighlight($event) {
  	// Note that $event is equal to the parameter of the `next` method of the emitter
  	// console.log($event);
  	this.lastElement = $event;
  }
}