import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  handleClick($event: MouseEvent) {
     const attr = ($event.target as HTMLElement).getAttribute('href');
     if ( attr !== null ) {
       this.router.navigate(attr.split('/').splice(1));
     }
  }
}
