import { Component } from '@angular/core';

@Component({
  selector: 'sample',
  template: `
  	<div class="sample">
  		<span *ngIf="iMadeIt">Yay, it works \\o/</span>
  	</div>
  `
})

export class SampleComponent {
  public iMadeIt = true;
}
