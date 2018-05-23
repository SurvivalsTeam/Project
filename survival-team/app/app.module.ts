import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExcursionComponent } from './excursion/excursion.component';
import { ExcursionDateComponent } from './excursion-date/excursion-date.component';
import {HttpService} from './http.service';


@NgModule({
  declarations: [
    AppComponent,
    ExcursionComponent,
    ExcursionDateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
