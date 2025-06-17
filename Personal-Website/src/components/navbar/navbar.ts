import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements AfterViewInit {
  links = [
    {name: 'Home', url: '/'},
    {name: 'About', url: '/about'},
    {name: 'Contact', url: '/contact'},
    ];

    initDropDown() {
      const dropdown = document.querySelector('.dropdown-menu');
      if(!dropdown) return;
      this.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.name;
        a.className = 'dropdown-item text-in-nav';
        li.appendChild(a);
        dropdown.appendChild(li);
      })
    }

  ngAfterViewInit() {
      this.initDropDown();
  }
}
