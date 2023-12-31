import { Component } from '@angular/core';
import { elementsList } from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgProfile = 'https://lh3.googleusercontent.com/a-/AOh14Gj4g_876K0u0zpeklckQhSIZZR_xOHufFhujcQxdA=s96-c';
  title = 'listicle';
  date = new Date(Date.now());
  list = elementsList;
}
