import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class AboutModule { }
