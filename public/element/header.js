class Header extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.setEvent();
    }

    setEvent() {
        this.changeLocation('.button__theme', '/');
        this.changeLocation('.button__menu', '/');
    }

    changeLocation(className, location) {
        document.querySelector(className).onclick = () => window.location.href = location;
    }

    render() {
        this.innerHTML = `
            <header>
                <div class="button__header button__theme">
                    <object data="/image/theme.svg" type="image/svg+xml"></object>
                </div>
                <div class="button__header button__menu">
                    <object data="/image/menu.svg" type="image/svg+xml"></object>
                </div>
            </header>
        `;
    }
}

export default Header;