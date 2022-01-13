import fetchModule from '/module/fetch.js';
import dateModule from '/module/date.js';

class ProfileEdit extends HTMLElement {
    constructor() {
        super();
        this.classList.add('profile-edit');
        this.editForm = document.createElement('form');
        this.editForm.enctype = "multipart/form-data";
        this.editForm.classList.add('edit-form');
    }

    async setUser(id=null) {
        this.classList.add('active');
        if(id) {
            this.user = await fetchModule.get(`/user/${id}`);
            this.user = this.user[0];
        }
        this.render();
    }

    setEvent() {
        this.querySelector('.profile-edit__background').onclick = () => {
            this.classList.remove('active');
            setTimeout(() => this.remove(), 500);
        }
        this.querySelector('.profile-edit__edit').onclick = () => {
            this.editForm.classList.add('active');
        }
        this.querySelector('.edit-form__close').onclick = () => {
            this.editForm.classList.remove('active');
        }
        this.querySelector('.edit-form__save').onclick = () => {
            const formData = new FormData(this.editForm);
            let json = {};
            formData.forEach((val, key) => {
                json[key] = val;
            })
            fetchModule.put(`/user/${this.user.u_id}`, json)
            .then(res => {
                if(res) {
                    alert('수정 완료!');
                    document.querySelector('main').innerHTML = `<main-page></main-page>`;
                } else {
                    alert('정보를 다시 확인해주세요!')
                }
            })
        }
    }

    setEditForm() {
        this.editForm.innerHTML = `
            <div class="edit-form__body" enctype="multipart/form-data">
                <div class="edit-form__header">
                    <div class="edit-form__close">
                        <object data="/icon/close.svg" type="image/svg+xml"></object>
                    </div>
                    <div class="edit-form__save">저장</div>
                </div>
                <div class="edit-form__profile">
                    <div class="edit-form__image"></div>
                    <label class="edit-form__camera" for="user_profile">
                        <object data="/icon/camera.svg" type="image/svg+xml"></object>
                        <input type="file" id="user_profile" name="u_img">
                    </label>
                </div>
                <div class="edit-form__info">
                    <input class="edit-form__name" placeholder="이름을 입력해주세요." value="${this.user.u_name}" name="u_name">
                    <input class="edit-form__date" type="date" value="${dateModule.normalDash(this.user.u_birth)}" name="u_birth">
                </div>
            </div>
            <div class="profile-edit__background"></div>
        `;
        this.editForm.querySelector('.edit-form__image').style.backgroundImage = `url(/user_image/${this.user.u_img})`;
        this.append(this.editForm);
    }

    render() {
        if(this.user) {
            this.innerHTML = `
            <div class="profile-edit__body">
                <div class="profile-edit__image">
                    <div class="profile-edit__label">${this.user.u_name}</div>
                    <div class="profile-edit__edit">
                        <object data="/icon/edit.svg" type="image/svg+xml"></object>
                    </div>
                </div>
                <div class="profile-edit__birth flex">
                    <div class="profile-edit__birth--red">${dateModule.ddayBirth(this.user.u_birth)}</div>
                    <div class="profile-edit__birth--small">${dateModule.normal(this.user.u_birth)}</div>
                </div>
            </div>
            <div class="profile-edit__background"></div>
            `;
            this.querySelector('.profile-edit__image').style.backgroundImage = `url(/user_image/${this.user.u_img})`;
        } else {
            this.innerHTML = `
            <div class="profile-edit__body">
                <div class="profile-edit__image">
                    <div class="profile-edit__label">자기</div>
                    <div class="profile-edit__camera">
                        <object data="/icon/camera.svg" type="image/svg+xml"></object>
                    </div>
                    <div class="profile-edit__edit">
                        <object data="/icon/edit.svg" type="image/svg+xml"></object>
                    </div>
                </div>
                <div class="profile-edit__birth">생일을 입력해주세요.</div>
            </div>
            <div class="profile-edit__background"></div>
            `;
        }
        this.setEditForm();
        this.setEvent();
    }
}

export default ProfileEdit;