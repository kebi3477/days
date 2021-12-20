class Footer extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = `
            <footer>
                <div class="footer__button">
                    <object data="/icon/calendar.svg" type="image/svg+xml"></object>
                </div>
                <div class="footer__button">
                    <object data="/icon/main.svg" type="image/svg+xml"></object>
                </div>
                <div class="footer__button">
                    <object data="/icon/list.svg" type="image/svg+xml"></object>
                </div>
            </footer>
        `;
    }
}