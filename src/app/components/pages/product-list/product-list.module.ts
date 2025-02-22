import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductListModule { }
