import {AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {HeaderName} from '../header-name/header-name';

@Component({
  selector: 'app-timeline',
  imports: [HeaderName],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.css'],
  encapsulation: ViewEncapsulation.None
})
export class Timeline implements AfterViewInit{
  infos = [
    {text: "started coding at 14", year: "2023"},
    {text: "first job at 16", year: "2024"},
    {text: "graduated high school at 18", year: "2025"},
  ];
  @ViewChild('container', { static: false }) containerRef!: ElementRef;
  loadInCards() {

    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    console.log(this.containerRef.nativeElement);
    const outerContainer = this.containerRef.nativeElement;
    if (!outerContainer) return;
    const container = document.createElement('div');


    outerContainer.appendChild(container);
    if (window.innerWidth < 768) {
      container.className = 'row row-cols-1';
      outerContainer.className.replace('justify-content-center', 'justify-content-start');
    } else {
      container.className = 'row row-cols-2';
    }
    let count = 0; // Counter of the position in the infos array
    let divisor = 2; // Divisor to determine the border position
    let i = 0; // Counter to check on which side I am currently
    const windowSize = window.innerWidth; // Get the current window size
    // Create a new div for each info and add it to the container
    while (count < this.infos.length) {
      const createdDiv = document.createElement('div');
      createdDiv.className = 'col';

      if (i % divisor === 0 || window.innerWidth < 768) {
        createdDiv.innerHTML =
          `
        <div class="card m-5 p-3">
          <div class="card-body">
            <h5 class="card-title">${this.infos[count].year}</h5>
            <p class="card-text">${this.infos[count].text}</p>
            <p class="card-text"><small class="text-muted">hello</small></p>
          </div>
        </div>
        `

        count++;
        divisor++;

      }

      if (windowSize >= 768 && (i + 1) % 2 !== 0) {
        createdDiv.className += ' border-right';
        createdDiv.style.animation = 'fly-in-from-right 2s ease-in-out forwards';
        console.log("right")
      } else if (windowSize >= 768) {
        createdDiv.className += ' border-left';
        createdDiv.style.animation = 'fly-in-from-left 2s ease-in-out forwards';
        console.log("left")
      } else {
        createdDiv.className += ' border-top';
        if ((i + 1) % 2 === 0) {
          createdDiv.style.animation = 'fly-in-from-right 2s ease-in-out forwards';

        } else {
          createdDiv.style.animation = 'fly-in-from-left 2s ease-in-out forwards';
        }
      }


      if (count >= this.infos.length && windowSize < 768) { // It is for mobile if it is the last element than add a bottom border
        createdDiv.className += ' border-bottom';
      }
      container?.appendChild(createdDiv);
      i++;

    }
    // Add an extra container so that both sides have a border and not only the left or the right side
    if (windowSize >= 768) {
      const extraContainer = document.createElement('div');
      extraContainer.className = 'col';
      if (i % 2 !== 0) {
        extraContainer.className += ' border-left';
        extraContainer.style.animation = 'fly-in-from-left 2s ease-in-out forwards';
      } else {
        extraContainer.className += ' border-right';
        extraContainer.style.animation = 'fly-in-from-right 2s ease-in-out forwards';
      }
      container?.appendChild(extraContainer);
    }
  }
  ngAfterViewInit(): void {
    this.loadInCards();
  }
}
