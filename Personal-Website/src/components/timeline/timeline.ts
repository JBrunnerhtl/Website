import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.html',
  styleUrl: './timeline.css'
})
export class Timeline implements AfterViewInit{
  infos = [
    {text: "started coding at 14"},
    {text: "first job at 16"},
    {text: "graduated high school at 18"},
  ];

  loadInCards() {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    const outerContainer = document.querySelector('.container');
    if (!outerContainer) return;
    const container = document.createElement('div');
    outerContainer.appendChild(container);
    if (window.innerWidth < 768) {
      container.className = 'row row-cols-1';
      outerContainer.className.replace('justify-content-center', 'justify-content-start');
    } else {
      container.className = 'row row-cols-2';
    }
    let count = 0;
    let divisor = 2;
    let i = 0;

    while (count < this.infos.length) {
      const createdDiv = document.createElement('div');
      createdDiv.className = 'col';
      console.log(count)
      if (i % divisor === 0 || window.innerWidth < 768) {
        createdDiv.innerHTML =
          `
        <div class="card m-5 p-3">
          <div class="card-body">
            <h5 class="card-title">hello</h5>
            <p class="card-text">${this.infos[count].text}</p>
            <p class="card-text"><small class="text-muted">hello</small></p>
          </div>
        </div>
        `

        count++;
        divisor++;

      }
      else
      {
         createdDiv.className += 'm-5';
      }
      if (window.innerWidth >= 768 && i+1 % 2 !== 0) {
        createdDiv.style.borderRight = '2px solid #800ac4';
        console.log("right")
      }
      else if(window.innerWidth >= 768) {
        createdDiv.style.borderLeft = '2px solid #800ac4';
        console.log("left")
      }
      container?.appendChild(createdDiv);
      i++;



    }
  }

  ngAfterViewInit(): void {
    this.loadInCards();
  }
}
