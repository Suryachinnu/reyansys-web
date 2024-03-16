import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    name: 'Medium',
    description: 'some text',
    mediumUrl: 'https://medium.com/@ReyanSys'
  };

  public contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.contactForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Construct the mailto link
      const mailtoLink = `mailto:contact@reyansys.com?subject=Contact Form Submission&body=
        Full Name: ${formData.fullName}%0D%0A
        Email: ${formData.email}%0D%0A
        Phone: ${formData.phone}%0D%0A
        Message: ${formData.message}`;

      // Open the default email client
      window.location.href = mailtoLink;
    }
  }
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
