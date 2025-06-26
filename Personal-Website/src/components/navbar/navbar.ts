import {Component} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';


@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink
  ],

  styleUrl: './navbar.css',
  templateUrl : './navbar.html',
})
export class Navbar{
  constructor(private router : Router) {
    if(!this.router) return;
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
  }


  navbarItems = [
    {name: 'Programming Languages', url: '/', fragment: 'programming-languages'},
    {name: 'Journey', url: '/', fragment: 'journey'},
    {name: 'Projects', url: '/', fragment: 'projects'},
  ];
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  title = "Home";
}
