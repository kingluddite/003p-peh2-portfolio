import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints'; // eslint-disable-line no-unused-vars

class HighlightSection {
  constructor() {
    this.pageSections = $('.page-section');
    this.headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
  }

  createPageSectionWaypoints() {
    const that = this;
    this.pageSections.each(function () { // eslint-disable-line func-names
      const currentPageSection = this;
      new Waypoint({ // eslint-disable-line
        element: currentPageSection,
        handler(direction) {
          if (direction === 'down') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '18%',
      });

      new Waypoint({ // eslint-disable-line
        element: currentPageSection,
        handler(direction) {
          if (direction === 'up') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },
        offset: '-40%',
      });
    });
  }
}

export default HighlightSection;
