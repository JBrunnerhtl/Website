import {Component, Input} from '@angular/core';
import {HeaderName} from '../header-name/header-name';

@Component({
  selector: 'app-introduction',
  imports: [HeaderName],
  templateUrl: './introduction.html',
  styleUrl: './introduction.css'
})
export class Introduction {
  @Input() title: string = '';
  @Input() text: string = '';
}
