import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeModule} from './home/home.module';
import {AuthenticationGuard} from '../../../common-frontend-library/src/lib/auth/guard/authentication.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => HomeModule,
    canActivate: [AuthenticationGuard],
    data: { roles: ['user'] },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
