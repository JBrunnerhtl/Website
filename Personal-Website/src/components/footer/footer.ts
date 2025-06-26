import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
  pictures = [
    {name: "GitHub", url: "https://github.com/JBrunnerhtl", mailto: "", svg: "https://www.svgrepo.com/show/450156/github.svg"},
    {name: "Gmail", url: "",mailto: "brunnerjan1102@gmail.com", svg: "https://www.svgrepo.com/show/452213/gmail.svg"}
  ]

}
