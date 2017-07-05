import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // eslint-disable-line no-unused-vars

class StickyHeader {
  constructor() {
    this.siteHeader = $('.site-header');
    this.headerTriggerElement = $('.large-hero__title');
    this.createHeaderWayPoint();
  }

  createHeaderWayPoint() {
    const that = this;
    new Waypoint({ // eslint-disable-line
      element: that.headerTriggerElement[0],
      handler(direction) {
        if (direction === 'down') {
          that.siteHeader.addClass('site-header--dark');
        } else {
          that.siteHeader.removeClass('site-header--dark');
        }
      },
    });
  }

}

export default StickyHeader;
