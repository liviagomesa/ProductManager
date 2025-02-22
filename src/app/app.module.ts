import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './components/ui/header/header.module';
import { MaterialModule } from './material.module';
import { HomeModule } from './components/pages/home/home.module';
import { AboutModule } from './components/pages/about/about.module';
import { ProductListModule } from './components/pages/product-list/product-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MaterialModule,
    HomeModule,
    AboutModule,
    ProductListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
