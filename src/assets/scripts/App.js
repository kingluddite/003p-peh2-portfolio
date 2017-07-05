import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

/* eslint-disable no-unused-vars */
const mobileMenu = new MobileMenu();
/* eslint-disable no-new */
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.tool'), '85%');
