# angular2-swiper-example
Example of how to use Swiper in angular 2 application

# Install require global applications
- npm install -g typings
- npm install -g webpack
- npm install -g typescript

# Install local dependencies
npm install

# Run the application
npm start

## Sample Markup
Example:

```html
<div class="myslides">
  <ks-swiper-container [options]="example1SwipeOptions">
    <ks-swiper-slide *ngFor="#s of [1,2,3,4,5,6,7]">
      <img src="http://api.randomuser.me/portraits/thumb/men/{{s}}.jpg">
    </ks-swiper-slide>
  </ks-swiper-container>
</div>
```
