import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { OverviewComponent } from './overview/overview.component';
import { ListComponent } from './list/list.component';
import { ListPricePipe } from './list/pipes/list-price.pipe';
import { ListEntryComponent } from './list/list-entry/list-entry.component';
import { FilterComponent } from './shared/filter/filter.component';
import { TimeviewerComponent } from './timeviewer/timeviewer.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    OverviewComponent,
    ListComponent,
    ListPricePipe,
    ListEntryComponent,
    FilterComponent,
    TimeviewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
