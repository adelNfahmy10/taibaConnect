import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgClass, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  constructor(private wowService:NgwWowService){
    this.wowService.init()
  }

  showArrow:boolean = false
  @HostListener('window:scroll') onScroll(){
    let scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      this.showArrow = true
    } else {
      this.showArrow = false
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
