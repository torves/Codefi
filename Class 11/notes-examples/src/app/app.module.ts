import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { BoxesComponent } from './boxes/boxes.component';
import { SomeCompComponent } from './some-comp/some-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    BoxesComponent,
    SomeCompComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
