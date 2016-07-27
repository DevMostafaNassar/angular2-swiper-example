declare var require: any;

import {Component} from '@angular/core';
import {Example1} from './example1/example1';
import {Example2} from './example2/example2';

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [Example1, Example2],
  template: `
    <example1></example1>
      <div style="height:100px">
      </div>
    <example2></example2>
  `
})
export class App {
  constructor() {
  }
}
