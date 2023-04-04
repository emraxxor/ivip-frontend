import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../../../../common-frontend-library/src/common-library/material/material.module';
import {NzElementModule} from '../../../../common-frontend-library/src/common-library/nz-element/nz-element.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    NzElementModule
  ],
  exports: [
    MaterialModule,
    NzElementModule,
  ]
})
export class SharedModule { }
