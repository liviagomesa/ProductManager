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
import { HttpClientModule } from '@angular/common/http';
import { ProductFormModule } from './components/pages/product-form/product-form.module';
import { ProductDetailsModule } from './components/pages/product-details/product-details.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    MaterialModule,
    HomeModule,
    AboutModule,
    ProductListModule,
    ProductFormModule,
    ProductDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
