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
    {text: "I started coding at a age of 14 with JavaScript, HTML and CSS", year: "2022"},
    {text: "I joined the HTL Leonding, where I learned C#", year: "2023"},
    {text: "Currently I am in the second half-year of the school year", year: "2024"},
    {text: "I am now in the second grade of the HTL Leonding. I am learning C#, C, HTML, CSS, JavaScript, TypeScript, Angular and Rust", year: "2025"},
    {text: "I am curious about the future and what it will bring. I am looking forward to learning more about programming and new technology.", year: "2026"},
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
    let oneOrThree: boolean = false;
    const windowSize = window.innerWidth; // Get the current window size
    // Create a new div for each info and add it to the container
    while (count < this.infos.length) {
      const createdDiv = document.createElement('div');
      createdDiv.className = 'col';

      if (i % divisor === 0 || windowSize < 768) {
        createdDiv.innerHTML =
          `
        <div class="card m-5 p-3 card-timeline">
          <div class="card-body">
            <h5 class="card-title fw-bold card-title-timeline">${this.infos[count].year}</h5>
            <p class="card-text card-text-timeline">${this.infos[count].text}</p>

          </div>
        </div>
        `

        count++;
        if(i === 0)
        {
          divisor++;
        }
        else
        {
          if(!oneOrThree)
          {
            divisor++;
            oneOrThree = true;
          }
          else
          {
            oneOrThree = false;
            divisor += 3;
          }
        }


      }

      container?.appendChild(createdDiv);
      i++;

    }
    // Add an extra container so that both sides have a border and not only the left or the right side
    if (windowSize >= 768) {
      const extraContainer = document.createElement('div');
      extraContainer.className = 'col';
      container?.appendChild(extraContainer);
    }
  }

  checkCardsInView() {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    const windowSize = window.innerWidth;

    const cards = this.containerRef.nativeElement.querySelectorAll('.col');
    cards.forEach((card: HTMLElement, i: number) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (windowSize >= 768 && i % 2 === 0) {
          if(!card.className.includes('border-right')) card.className += ' border-right';
          card.style.animation = 'fly-in-from-right-without-breaks 1s ease-in-out forwards';

        } else if (windowSize >= 768) {
          if(!card.className.includes('border-left')) card.className += ' border-left';
          card.style.animation = 'fly-in-from-left-without-breaks 1s ease-in-out forwards';
        } else {

          if ((i + 1) % 2 === 0) {
            if(!card.className.includes('border-top')) card.className += ' border-top';
            card.style.animation = 'fly-in-from-right-without-breaks 1s ease-in-out forwards';

          } else {
            if(!card.className.includes('border-top')) card.className += ' border-top';
            card.style.animation = 'fly-in-from-left-without-breaks 1s ease-in-out forwards';
          }
        }
      }
      if (i+1 >= this.infos.length && windowSize < 768) { // It is for mobile if it is the last element than add a bottom border
        if (!card.className.includes('border-bottom')) card.className += ' border-bottom';
      }
    });
  }

  ngAfterViewInit(): void {
    this.loadInCards();
    if( typeof window === 'undefined' || typeof document === 'undefined') return;
    window.addEventListener('scroll', this.checkCardsInView.bind(this));
    this.checkCardsInView();
  }
}
