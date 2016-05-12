import {Component} from '@angular/core';
import {Example1} from './example1/example1';
import {Example2} from './example2/example2';

import './app.css';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [Example1, Example2],
  template: require('./app.html')
})
export class App {
  constructor() {
  }
}
