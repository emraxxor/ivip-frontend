import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzMenuModule} from 'ng-zorro-antd/menu';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzDropDownModule
  ]
})
export class NzElementModule { }
