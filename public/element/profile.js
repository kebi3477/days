class Profile extends HTMLElement {
    constructor() {
        super();
        this.classList.add('profile');
        this.data = JSON.parse(this.textContent);
        this.name = this.data.u_name;
        this.image = this.data.u_img;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="profile__image">
                <img src="/image/${this.image}">
            </div>
            <div class="profile__name">${this.name}</div>
        `;
    }
}

export default Profile;