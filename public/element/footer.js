class Footer extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.setEvents();
    }

    setEvents() {
        this.querySelector('.footer__calendar').onclick = () => {
            document.querySelector('main').innerHTML = `
                <div class="calendar__title">Calendar</div>
                <love-calendar></love-calendar>
            `;
            this.changeSmooth();
        }
        this.querySelector('.footer__day').onclick = () => {
            document.querySelector('main').innerHTML = `
                <header-menu></header-menu>
                <love-timer>2021-12-16</love-timer>
                <div class="profile__list">
                    <profile-item>{"name":"주연","image":"jy.png"}</profile-item>
                    <img src="icon/heart.svg">
                    <profile-item>{"name":"동민","image":"kebi.png"}</profile-item>
                </div>
            `;
            this.changeSmooth();
        }
        this.querySelector('.footer__dday').onclick = () => {
            document.querySelector('main').innerHTML = `
                <ddays--list>2021-12-16</ddays--list>
            `;
            this.changeSmooth();
        }
    }

    changeSmooth() {
        document.querySelector('main').animate([
            {opacity: '0'},
            {opacity: '1'}
        ], 500);
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="footer__button footer__calendar">
                    <object data="/icon/calendar.svg" type="image/svg+xml"></object>
                </div>
                <div class="footer__button footer__day">
                    <object data="/icon/main.svg" type="image/svg+xml"></object>
                </div>
                <div class="footer__button footer__dday">
                    <object data="/icon/list.svg" type="image/svg+xml"></object>
                </div>
            </footer>
        `;
    }
}

export default Footer;