import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {Introduction} from '../introduction/introduction';


@Component({
  selector: 'app-projects',
  imports: [
    Introduction,
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  encapsulation: ViewEncapsulation.None,
})
export class Projects implements AfterViewInit {
  repos : Repo[] =
    [
      new Repo('Project-Fitness-and-Health', 'https://github.com/JBrunnerhtl/Project-Fitness-and-Health'),
      new Repo('Personal-Website', 'https://github.com/JBrunnerhtl/Personal-Website'),
      new Repo('My-Website', 'https://github.com/JBrunnerhtl/My-Website'),
      new Repo('Rust-Todo-List', 'https://github.com/JBrunnerhtl/Rust-Todo-List'),
      new Repo('RpnCalculator', 'https://github.com/JBrunnerhtl/RpnCalculator'),
      new Repo('Todo-List JavaScript', 'https://github.com/JBrunnerhtl/Todo-List'),
    ]

  ngAfterViewInit(): void {
    if(typeof document === 'undefined' || typeof window === 'undefined') return;
    window.addEventListener('scroll', (event: Event) => {
      const elements = document.querySelectorAll('.card-project');
      console.log(elements);
      if (elements.length === 0) return;
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0 && element instanceof HTMLElement) {

          element.style.animation = 'present 2s ease-in-out forwards';
        }
      })
    })
  }
}

class Repo {
  name: string;
  url: string;
  constructor(name: string, url: string) {
    this.name = name;
    this.url = url;
  }
}
