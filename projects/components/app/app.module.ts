import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component.ts';
import { SampleComponent } from './sample.ts';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    SampleComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}