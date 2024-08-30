import { NewServiceService } from './new-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { NewsDetailsComponent } from './newsDetails/newsDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsDetailsComponent,
    NewsDetailsComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [NewServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
