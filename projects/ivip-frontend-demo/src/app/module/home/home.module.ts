import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {HomeComponent} from './component/home/home.component';
import {HomeRoutingModule} from './home-routing.module';
import {NumberComponent} from './component/number/number.component';
import {FormModule} from '../../../../../common-frontend-library/src/form/form.module';
import {PasswordComponent} from './component/password/password.component';
import {MaterialModule} from '../../../../../common-frontend-library/src/common-library/material/material.module';


@NgModule({
  declarations: [HomeComponent, NumberComponent, PasswordComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    FormModule,
    MaterialModule,
  ]
})
export class HomeModule { }
