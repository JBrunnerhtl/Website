import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from '../components/navbar/navbar';
import {HeaderName} from '../components/header-name/header-name';
import {ProgrammingLanguages} from '../components/programming-languages/programming-languages';
import {Timeline} from '../components/timeline/timeline';
import {Introduction} from '../components/introduction/introduction';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HeaderName, ProgrammingLanguages, Timeline, Introduction],
  templateUrl: './app.html'

})
export class App {

}
