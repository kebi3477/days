class Footer extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.setEvents();
    }

    setEvents() {
        this.querySelector('.button__calendar').addEventListener('click', function() {
            document.querySelector('main').innerHTML = `
                <div class="calendar__title">Calendar</div>
                <love-calendar></love-calendar>
            `;
        })
        this.querySelector('.button__day').addEventListener('click', function() {
            document.querySelector('main').innerHTML = `
                <header-menu></header-menu>
                <love-timer>2021-12-16</love-timer>
                <div class="profile__list">
                    <profile-item>{"name":"주연","image":"jy.png"}</profile-item>
                    <img src="icon/heart.svg">
                    <profile-item>{"name":"동민","image":"kebi.png"}</profile-item>
                </div>
            `;
        })
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="footer__button button__calendar">
                    <object data="/icon/calendar.svg" type="image/svg+xml"></object>
                </div>
                <div class="footer__button button__day">
                    <object data="/icon/main.svg" type="image/svg+xml"></object>
                </div>
                <div class="footer__button button__schedule">
                    <object data="/icon/list.svg" type="image/svg+xml"></object>
                </div>
            </footer>
        `;
    }
}

export default Footer;