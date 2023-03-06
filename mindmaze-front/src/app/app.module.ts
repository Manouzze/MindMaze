import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './home/home.component';
import { PagecardsComponent } from './pagecards/pagecards.component';

@NgModule({
  declarations: [AppComponent, CategoryComponent, CardComponent, HomeComponent, PagecardsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
