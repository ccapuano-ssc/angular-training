import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TapCounterComponent } from './tap-counter/tap-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TapCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
