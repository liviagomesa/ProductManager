import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductDetailsModule { }
