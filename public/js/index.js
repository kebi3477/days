import Footer from '../element/footer.js';
import Header from '../element/header.js';
import LoveTimer from '../element/loveTimer.js';
import Profile from '../element/profile.js';
import Calendar from '../element/calendar.js';
import Ddays from '../element/ddays.js';

const customEl = window.customElements;
customEl.define("header-menu", Header);
customEl.define("footer-menu", Footer);
customEl.define("love-timer", LoveTimer);
customEl.define("profile-item", Profile);
customEl.define("love-calendar", Calendar);
customEl.define("ddays--list", Ddays);