class Menu extends HTMLElement {
    constructor() {
        super();
        this.classList.add('menu');
        this.render();
        this.setEvent();
    }

    setEvent() {
        this.querySelector('.date').onclick = () => {
            this.querySelector('edit-date').classList.add('active');
        }
        this.querySelector('.word').onclick = () => {
            this.querySelector('edit-word').classList.add('active');
        }
        this.querySelector('.menu__background').onclick = () => {
            this.classList.remove('active');
        }
    }

    render() {
        this.innerHTML = `
            <div class="menu__body">
                <div class="menu__list">
                    <div class="menu__logo">
                        <object data="/image/simbol.svg" type="image/svg+xml"></object>
                    </div>
                    <div class="menu__item date">
                        <object data="/icon/hand.svg" type="image/svg+xml"></object>
                        <div>커플이 된 날 변경</div>
                    </div>
                    <div class="menu__item word">
                        <object data="/icon/feather.svg" type="image/svg+xml"></object>
                        <div>상단 문구 수정</div>
                    </div>
                    <div class="menu__item">
                        <object data="/icon/bell.svg" type="image/svg+xml"></object>
                        <div>알람 설정</div>
                    </div>
                </div>
            </div>
            <div class="menu__background"></div>
            <edit-word></edit-word>
            <edit-date></edit-date>
        `;
    }
}

export default Menu;