class Footer extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.setEvent();
    }

    setEvent() {
        this.querySelector('.footer__calendar').onclick = () => {
            document.querySelector('main').innerHTML = `
                <div class="calendar__title">Calendar</div>
                <love-calendar></love-calendar>
            `;
            this.changeSmooth();
            this.changeColor(this.querySelector('.footer__calendar'));
        }
        this.querySelector('.footer__day').onclick = () => {
            document.querySelector('main').innerHTML = `
                <main-page></main-page>
            `;
            this.changeSmooth();
            this.changeColor(this.querySelector('.footer__day'));
        }
        this.querySelector('.footer__dday').onclick = () => {
            document.querySelector('main').innerHTML = `
                <ddays--list>2021-12-16</ddays--list>
            `;
            this.changeSmooth();
            this.changeColor(this.querySelector('.footer__dday'));
        }
    }

    changeSmooth() {
        document.querySelector('main').animate([
            {opacity: '0'},
            {opacity: '1'}
        ], 500);
    }

    changeColor(el) {
        this.querySelectorAll('.footer__button').forEach(el => {
            el.classList.remove('active');
        })
        el.classList.add('active');
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="footer__button footer__calendar">
                    <object data="/icon/calendar.svg" type="image/svg+xml"></object>
                </div>
                <div class="footer__button footer__day active">
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