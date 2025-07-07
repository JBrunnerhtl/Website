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
    { name: 'Aurora Dream', color: '#800ac4', buttonColor: '#a259e6', buttonTextColor: '#fff' },
    { name: 'Solar Flare', color: '#ffb300', buttonColor: '#ffd54f', buttonTextColor: '#222' },
    { name: 'Oceanic Depths', color: '#1976d2', buttonColor: '#64b5f6', buttonTextColor: '#fff' },
    { name: 'Neon Pulse', color: '#00ffc3', buttonColor: '#1de9b6', buttonTextColor: '#222' },
    { name: 'Forest Whisper', color: '#388e3c', buttonColor: '#81c784', buttonTextColor: '#222' },
    { name: 'Cyberpunk Night', color: '#ff0080', buttonColor: '#ff5ec8', buttonTextColor: '#fff' },
    { name: 'Sunset Boulevard', color: '#ff7043', buttonColor: '#ffab91', buttonTextColor: '#222' },
    { name: 'Arctic Breeze', color: '#b2ebf2', buttonColor: '#e0f7fa', buttonTextColor: '#222' }

  ];
  scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  changeTheme = (color: string, buttonColor: string = 'error', buttonTextColor: string) => {

    document.documentElement.style.setProperty('--main-color', color);
    document.documentElement.style.setProperty('--button-project-color', buttonColor);
    document.documentElement.style.setProperty('--button-project-text-color', buttonTextColor);
    if(localStorage.getItem('theme') ) localStorage.removeItem('theme');
    if(localStorage.getItem('button-color')) localStorage.removeItem('button-color');
    if (localStorage.getItem('button-text-color')) localStorage.removeItem('button-text-color');
    localStorage.setItem('theme', color);
    localStorage.setItem('button-color', buttonColor);
    localStorage.setItem('button-text-color', buttonTextColor);
  }



  title = "Home";
}
