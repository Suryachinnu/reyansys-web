import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import * as $ from 'jquery';
import 'bootstrap'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // public $:any;
  constructor(){
    setTheme('bs5');   
  }
  OnInit(){
    this.init()
  }
  private init(): void {
   

    

    // $(window).scroll(() => {
    //   if ($(".navbar").offset().top > 50) {
    //     $(".navbar-fixed-top").addClass("top-nav-collapse");
    //   } else {
    //     $(".navbar-fixed-top").removeClass("top-nav-collapse");
    //   }
    // });

    // PARALLAX EFFECT
    // $.stellar({
    //   horizontalScrolling: false,
    // });

    // SMOOTH SCROLL
    $('.custom-navbar a, #home a').on('click', (event) => {
      const $anchor = $(event.currentTarget);
      $('html, body').stop().animate({
        // scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  }
}
