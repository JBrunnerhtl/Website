import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from '../components/navbar/navbar';
import {HeaderName} from '../components/header-name/header-name';
import {ProgrammingLanguages} from '../components/programming-languages/programming-languages';
import {Timeline} from '../components/timeline/timeline';
import {Introduction} from '../components/introduction/introduction';
import {Projects} from '../components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, HeaderName, ProgrammingLanguages, Timeline, Projects],
  templateUrl: './app.html'

})
export class App {

}
