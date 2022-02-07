import ProfileEdit from './profileEdit.js';

class Profile extends HTMLElement {
    constructor() {
        super();
        this.classList.add('profile');
        this.data = JSON.parse(this.textContent);
        this.name = this.data.u_name;
        this.image = this.data.u_img;
        this.render();
        this.setEvent();
    }

    setEvent() {
        this.onclick = () => {
            const edit = new ProfileEdit();
            edit.setUser(this.data.u_id);
            document.querySelector('header-menu').before(edit)
        }
    }

    setImage() {
        if(this.image) {
            const img = document.createElement('img');
            img.src = `/user_image/${this.image}`;
            this.querySelector('.profile__image').append(img);
        }
    }

    render() {
        this.innerHTML = `
            <div class="profile__image"></div>
            <div class="profile__name">${this.name}</div>
        `;
        this.setImage();
    }
}

export default Profile;