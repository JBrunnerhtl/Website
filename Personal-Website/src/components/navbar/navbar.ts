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
    {name: 'Programming Languages', url: '/', fragment: 'programming-languages', type: "link"},
    {name: 'Journey', url: '/', fragment: 'journey', type: "link"},
    {name: 'Projects', url: '/', fragment: 'projects', type: "link"},
    {name: 'Themes', url: '/', fragment: '/', type: 'dropdown'}
  ];

  colors = [
    { name: 'Aurora Dream', color: '#800ac4' },
    { name: 'Solar Flare', color: '#ffb300' },
    { name: 'Oceanic Depths', color: '#1976d2' },
    { name: 'Neon Pulse', color: '#00ffc3' },
    { name: 'Forest Whisper', color: '#388e3c' },
    { name: 'Cyberpunk Night', color: '#ff0080' },
    { name: 'Sunset Boulevard', color: '#ff7043' },
    { name: 'Arctic Breeze', color: '#b2ebf2' },

  ];
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  changeTheme = (color: string) => {
    document.documentElement.style.setProperty('--main-color', color);
    if(localStorage.getItem('theme')) localStorage.removeItem('theme');
    localStorage.setItem('theme', color);
  }



  title = "Home";
}
