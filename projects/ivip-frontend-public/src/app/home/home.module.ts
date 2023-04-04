import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {HomeRoutingModule} from './home-routing.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
