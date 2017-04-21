import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component.ts';
import { ListComponent } from './list.ts';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    ListComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}