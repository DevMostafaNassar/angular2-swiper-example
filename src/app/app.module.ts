import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';

import { AppComponent }  from './app.component';
import { Example1Component } from './example1/example1';
import { Example2Component } from './example2/example2';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, Example1Component, Example2Component,
    KSSwiperContainer, KSSwiperSlide],
  bootstrap: [AppComponent]
})
export class AppModule { }
