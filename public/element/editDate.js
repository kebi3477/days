import fetchModule from '/module/fetch.js';

class EditDate extends HTMLElement {
    constructor(props) {
        super(props);
        this.classList.add('edit-form');
        this.render();
    }

    setEvent() {
        this.querySelector('.edit-form__close').onclick = () => {
            this.classList.remove('active');
        }
        this.querySelector('.edit-form__save').onclick = async () => {
            const password = localStorage.getItem('days-room');
            const date = this.querySelector('.edit-form__date').value;

            if(date === "") {
                alert('값이 비어있습니다!');
            } else {
                const data = fetchModule.put(`/room/${password}`, { date: date });
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
                    <div>커플이 된 날 변경</div>
                    <div class="edit-form__save">저장</div>
                </div>
                <div class="edit-form__wrap">
                    <input class="edit-form__date" type="date">
                </div>
            </form>
            <div class="profile-edit__background"></div>
        `;
        this.setEvent();
    }
}

export default EditDate;