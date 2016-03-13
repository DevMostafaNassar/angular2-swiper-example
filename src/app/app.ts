import {Component} from 'angular2/core';
import {Example1} from './example1/example1';
import {Example2} from './example2/example2';

require('./app.css');

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
