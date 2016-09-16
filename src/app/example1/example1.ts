import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

@Component({
  selector: 'example1',
  providers: [],
  template: `
  <div class="myslides">
    <ks-swiper-container [options]="example1SwipeOptions">
      <ks-swiper-slide *ngFor="let s of [1,2,3,4,5,6,7]">
        <img src="http://api.randomuser.me/portraits/thumb/men/{{s}}.jpg">
      </ks-swiper-slide>
    </ks-swiper-container>
    <button (click)="movePrev()">Prev</button>
    <button (click)="moveNext()">Next</button>
  </div>
  `
})
export class Example1Component implements AfterViewInit {

  // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  example1SwipeOptions: any;

  constructor() {
    this.example1SwipeOptions = {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 5
    };
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

}
