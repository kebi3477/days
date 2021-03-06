import Intro from '../element/intro.js';
import Menu from '../element/menu.js';
import Header from '../element/header.js';
import Footer from '../element/footer.js';
import Main from '../element/main.js';
import LoveTimer from '../element/loveTimer.js';
import Profile from '../element/profile.js';
import ProfileEdit from '../element/profileEdit.js';
import EditWord from '../element/editWord.js';
import EditDate from '../element/editDate.js';
import Calendar from '../element/calendar.js';
import Ddays from '../element/ddays.js';

const customEl = window.customElements;

customEl.define("intro-room", Intro);
customEl.define("menu-item", Menu);
customEl.define("header-menu", Header);
customEl.define("footer-menu", Footer);
customEl.define("main-page", Main);
customEl.define("love-timer", LoveTimer);
customEl.define("profile-item", Profile);
customEl.define("profile-edit", ProfileEdit);
customEl.define("edit-word", EditWord);
customEl.define("edit-date", EditDate);
customEl.define("love-calendar", Calendar);
customEl.define("ddays--list", Ddays);