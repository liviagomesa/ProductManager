import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ProductFormModule { }
