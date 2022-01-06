import Intro from '../element/intro.js';
import Menu from '../element/menu.js';
import Header from '../element/header.js';
import Footer from '../element/footer.js';
import Main from '../element/main.js';
import LoveTimer from '../element/loveTimer.js';
import Profile from '../element/profile.js';
import Calendar from '../element/calendar.js';
import Ddays from '../element/ddays.js';

const customEl = window.customElements;
const room = localStorage.getItem('days-room');

customEl.define("intro-room", Intro);
customEl.define("menu-item", Menu);
customEl.define("header-menu", Header);
customEl.define("footer-menu", Footer);
customEl.define("main-page", Main);
customEl.define("love-timer", LoveTimer);
customEl.define("profile-item", Profile);
customEl.define("love-calendar", Calendar);
customEl.define("ddays--list", Ddays);

if(room) {
    document.querySelector('main').innerHTML = `
        <main-page></main-page>
    `;
}