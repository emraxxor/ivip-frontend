import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationService} from './service/authentication-service';
import {BaseAuthenticationService} from './service/base-authentication.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AuthenticationService,
      useClass: BaseAuthenticationService
    }
  ]
})
export class AuthModule { }
