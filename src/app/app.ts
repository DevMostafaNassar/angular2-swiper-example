import {Component} from 'angular2/core';
import {Example1} from './example1/example1';

require('./app.css');

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [Example1],
  template: require('./app.html')
})
export class App {
  constructor() {
  }
}
