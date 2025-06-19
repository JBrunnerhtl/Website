import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-name',
  imports: [],
  templateUrl: './header-name.html',
  styleUrl: './header-name.css',
  standalone: true,
})
export class HeaderName {
  @Input() title: string = '';

}

