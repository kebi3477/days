import fetchModule from '/module/fetch.js';

class EditWord extends HTMLElement {
    constructor() {
        super();
        this.classList.add('edit-form');
        this.render();
    }

    setEvent() {
        this.querySelector('.edit-form__close').onclick = () => {
            this.classList.remove('active');
        }
        this.querySelector('.edit-form__save').onclick = async () => {
            const password = localStorage.getItem('days-room');
            const word = this.querySelector('.edit-form__word').value;

            if(word === "") {
                alert('값이 비어있습니다!');
            } else {
                const data = fetchModule.put(`/room/${password}`, { word: word });
                if(data) {
                    alert('저장 완료!');
                    document.querySelector('main').innerHTML = `<main-page></main-page>`;
                } else {
                    alert('데이터를 다시 확인해보세요!');
                }
            }

        }
    }

    render() {
        this.innerHTML = `
            <form class="edit-form__body">
                <div class="edit-form__header">
                    <div class="edit-form__close">
                        <object data="/icon/close.svg" type="image/svg+xml"></object>
                    </div>
                    <div>상단 문구 수정</div>
                    <div class="edit-form__save">저장</div>
                </div>
                <div class="edit-form__wrap">
                    <input class="edit-form__word" placeholder="우리 사랑한지">
                </div>
            </form>
            <div class="profile-edit__background"></div>
        `;
        this.setEvent();
    }
}

export default EditWord;