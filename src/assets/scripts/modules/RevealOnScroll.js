import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // eslint-disable-line no-unused-vars

class RevealOnScroll {
  constructor(elements, offset) {
    this.itemsToReveal = elements;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass('reveal-item');
  }

  createWaypoints() {
    const that = this;
    this.itemsToReveal.each(function () { // eslint-disable-line func-names
      const currentItem = this;
      new Waypoint({ // eslint-disable-line
        element: currentItem,
        handler() {
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: that.offsetPercentage,
      });
    });
  }

}

export default RevealOnScroll;
