import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // eslint-disable-line no-unused-vars
import smoothScroll from 'jquery-smooth-scroll';

class SmoothScrolling {
  constructor() {
    this.headerLinks = $('.primary-nav a');
    this.addSmoothScrolling();
  }

  addSmoothScrolling() {
    this.headerLinks.smoothScroll();
  }
}

export default SmoothScrolling;
