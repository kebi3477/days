import fetchModule from '/module/fetch.js';

class Intro extends HTMLElement {
    constructor() {
        super();
        const room = localStorage.getItem('days-room');
        
        if(room) {
            document.querySelector('main').innerHTML = `
            <main-page></main-page>
            `;
        } else {
            this.render();
            this.setEvent();
        }
    }

    setEvent() {
        const cover = this.querySelector('.room__cover');
        this.querySelector('.room__button--create').onclick = () => {
            cover.style.transform = 'translateX(0px)';
        }
        this.querySelector('.room__button--find').onclick = () => {
            cover.style.transform = 'translateX(calc((-100% / 3)*2))';
        }
        // 만들기 클릭 시
        this.querySelector('.room__create-button').onclick = async () => {
            const password = this.querySelector('.room__create-input').value;
            const data = await fetchModule.post('/room', { password: password })
            if(data === '0') {
                console.log('중복입니다.');
            } else {
                console.log('추가 완료!');
            }
        }
        //찾기 클릭 시
        this.querySelector('.room__find-button').onclick = async () => {
            const password = this.querySelector('.room__find-input').value;
            const data = await fetchModule.get(`/room/${password}`)
            if(data.r_password) {
                console.log('찾았다!');
                localStorage.setItem("days-room", data.r_password);
                document.querySelector('main').innerHTML = `
                    <header-menu></header-menu>
                    <love-timer>2021-12-16</love-timer>
                    <div class="profile__list">
                        <profile-item>{"name":"주연","image":"jy.png"}</profile-item>
                        <img src="icon/heart.svg">
                        <profile-item>{"name":"동민","image":"kebi.png"}</profile-item>
                    </div>
                `;
            } else {
                console.log('못찾았다.');
            }
        }
    }

    render() {
        this.innerHTML = `
            <div class="intro">
                <div class="intro__simbol">
                    <object data="/icon/logo.svg" type="image/svg+xml"></object>
                </div>
                <div class="room">
                    <div class="room__cover">
                        <div class="room__create">
                            <div class="room__label">우리만의 암호 설정하기</div>
                            <input class="room__create-input">
                            <button class="room__create-button">만들기</button>
                        </div>
                        <div class="room__buttons">
                            <div class="room__button room__button--create">만들기</div>
                            <div class="room__button room__button--find">찾기</div>
                        </div>
                        <div class="room__find">
                            <div class="room__label">우리만의 암호 찾기</div>
                            <input class="room__find-input">
                            <button class="room__find-button">찾기</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

export default Intro;