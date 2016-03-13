import {Component, ViewChild, AfterViewInit} from 'angular2/core';
import {KSSwiperContainer, KSSwiperSlide} from './../components/ks-swiper';

@Component({
  selector: 'example2',
  pipes: [],
  providers: [],
  directives: [KSSwiperContainer, KSSwiperSlide],
  template: require('./example2.html')
})
export class Example2 implements AfterViewInit {

  // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  slides: Array<any>;
  example2SwipeOptions: any;

  constructor() {
    this.example2SwipeOptions = {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 5
    };

    this.slides = [
      { number: 10 },
      { number: 11 }
    ];
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  addSlide() {
    this.slides.push({
      number: this.getRandom(12, 30)
    });
  }

  ngAfterViewInit() {
    console.log(this.swiperContainer);
  }

}
