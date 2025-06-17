import { Component } from '@angular/core';

@Component({
  selector: 'app-programming-languages',
  imports: [],
  templateUrl: './programming-languages.html',
  styleUrl: './programming-languages.css'
})
export class ProgrammingLanguages {
  imageUrls = [
    {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"},
    {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg"},
    {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg"},
    {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"},
    {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"},
    {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"},
    {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg"},
    {url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg"}
  ]
}
