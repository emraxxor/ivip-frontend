import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../../../common-frontend-library/src/lib/auth/service/authentication-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthenticationService) {
    console.log('Roles:', authService.roles());
  }

  ngOnInit(): void {
  }

}
