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
import { FilterStorePipe } from './shared/filter/pipes/filter-store.pipe';
import {FormsModule} from "@angular/forms";
import { FilterPipe } from './shared/filter/pipes/filter.pipe';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { SumEntryComponent } from './list/sum-entry/sum-entry.component';
import { SumEntryPricePipe } from './list/sum-entry/pipes/sum-entry-price.pipe';
import { SumEntryMapArticlePipe } from './list/sum-entry/pipes/sum-entry-map-article.pipe';
import { SumEntryArticlesPipe } from './list/sum-entry/pipes/sum-entry-articles.pipe';

registerLocaleData(localeDe)

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    OverviewComponent,
    ListComponent,
    ListPricePipe,
    ListEntryComponent,
    FilterComponent,
    TimeviewerComponent,
    FilterStorePipe,
    FilterPipe,
    SumEntryComponent,
    SumEntryPricePipe,
    SumEntryMapArticlePipe,
    SumEntryArticlesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
