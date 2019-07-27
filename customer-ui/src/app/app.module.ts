import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { PersonListComponent } from './person-list/person-list.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
