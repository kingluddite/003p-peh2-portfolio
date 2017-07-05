import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import HighlightSection from './modules/HighlightSection';
import SmoothScrolling from './modules/SmoothScrolling';

/* eslint-disable no-unused-vars */
const mobileMenu = new MobileMenu();
const stickyHeader = new StickyHeader();
const highlightSection = new HighlightSection();
const smoothScrolling = new SmoothScrolling();
/* eslint-disable no-new */
new RevealOnScroll($('.project-item'), '85%');
new RevealOnScroll($('.tool'), '85%');
