import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-all-logo',
  standalone: true,
  imports: [],
  templateUrl: './all-logo.component.html',
  styleUrl: './all-logo.component.scss',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AllLogoComponent {
  swiperConfig: SwiperOptions = {
    slidesPerView: 10,
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    },
    breakpoints: {
      1200: {
        slidesPerView: 10,
      },
      768: {
        slidesPerView: 5,
      },
      0: {
        slidesPerView: 3,
      }
    }
  };
}
