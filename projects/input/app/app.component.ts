import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
  	<div class="app">
        <box [things]="apples"></box>
        <box [things]="avocados"></box>
    </div>
  `
})
export class AppComponent {
  public apples = {
    item: 'apples',
    amount: 3
  };

  public avocados = {
    item: 'avocados',
    amount: 12
  }
}