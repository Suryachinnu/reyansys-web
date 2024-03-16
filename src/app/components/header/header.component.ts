import { ViewportScroller, DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import 'bootstrap'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showMenu:boolean = false;
 
ngOnInit(){
  this.init()
}
collapse(){
this.showMenu = !this.showMenu
}

private init(){
  $(window).on('load', () => {
    $('.preloader').fadeOut(1000); // set duration in brackets
  });
 
    
}
constructor(private elementRef: ElementRef, private router: Router,
  private viewportScroller: ViewportScroller,
  @Inject(DOCUMENT) private document: Document) {}

forceNavigate(name: string) {
  this.router.navigate(['/home'], { fragment: name }).then(() => {
    // After navigation, scroll to the fragment smoothly
    const element = this.document.getElementById(name);
    if (element) {
      this.viewportScroller.scrollToAnchor(name);
    }
  });
}
@HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const yOffset = window.pageYOffset;
    const navbarOffset = $(".navbar").offset();
if (navbarOffset && navbarOffset.top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
      } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
      }    
  }

}
