import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';


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
    // You can inject the Router service if you need to navigate programmatically
  }
  links = [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'},
    {name: 'Contact', url: '/contact'},
    ];

  navbarItems = [
    {name: 'example1', url: '/'},
    {name: 'example2', url: '/about'},
    {name: 'example3', url: '/contact'}
  ];


  title = "Navbar";
}
