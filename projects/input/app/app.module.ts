import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component.ts';
import { BoxComponent } from './box.ts';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    BoxComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}