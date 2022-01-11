import fetchModule from '/module/fetch.js';
import dateModule from '/module/date.js';

class ProfileEdit extends HTMLElement {
    constructor() {
        super();
        this.classList.add('profile-edit');
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
    }

    render() {
        if(this.user) {
            this.innerHTML = `
            <div class="profile-edit__body">
                <div class="profile-edit__image">
                    <div class="profile-edit__label">${this.user.u_name}</div>
                    <div class="profile-edit__camera">
                        <object data="/icon/camera.svg" type="image/svg+xml"></object>
                    </div>
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
        this.setEvent();
    }
}

export default ProfileEdit;