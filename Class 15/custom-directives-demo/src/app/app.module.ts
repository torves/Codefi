import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BasicBorderDirective } from 'src/app/directives/basic-border.directive';

import { AppComponent } from './app.component';
import { OptimalBorderDirective } from './directives/optimal-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicBorderDirective,
    OptimalBorderDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
