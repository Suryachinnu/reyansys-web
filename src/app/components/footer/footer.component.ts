import { Component } from '@angular/core';
import { LANDING_PAGE_CONTENT } from 'src/app/app.constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public APP_CONTENT: any = LANDING_PAGE_CONTENT  
}
