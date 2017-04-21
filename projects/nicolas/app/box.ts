import { Component, Input } from '@angular/core';

@Component({
  selector: 'box',
  template: `
  	<p class="box">
  		I am a box of {{things.amount}} {{things.item}}
  	</p>
  `
})

export class BoxComponent {
  @Input()
  public things: any;

}
