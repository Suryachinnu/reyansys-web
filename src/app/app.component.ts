import { Component } from '@angular/core';
import { LANDING_PAGE_CONTENT } from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public APP_CONTENT:any = LANDING_PAGE_CONTENT
  title = 'reyansys-web';
}
