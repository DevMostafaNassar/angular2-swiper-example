import {Component, ViewChild, AfterViewInit} from 'angular2/core';
import {KSSwiperContainer, KSSwiperSlide} from './components/ks-swiper';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [KSSwiperContainer, KSSwiperSlide],
  styles: [`
    .myslides {
      background: #eee;
      font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
      font-size: 14px;
      color: #000;
      margin: 0;
      padding: 0;
      height: 100px;
      border-bottom: 1px solid gray;
    }

    .swiper-container {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `],
  template: require('./app.html')
})
export class App implements AfterViewInit {

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
    console.log('here');
    console.log(this.swiperContainer);
  }

}
