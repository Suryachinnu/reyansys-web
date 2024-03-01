import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LANDING_PAGE_CONTENT } from 'src/app/app.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public APP_CONTENT: any = LANDING_PAGE_CONTENT  
 blogger: { name: string, description: string, mediumUrl: string } = {
  name:'Medium',
  description:'some text',
  mediumUrl:'https://medium.com/@ReyanSys'
 };

  redirectToMedium() {
    window.location.href = this.blogger.mediumUrl;
  }
customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
}

}
