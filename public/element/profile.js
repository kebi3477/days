class Profile extends HTMLElement {
    constructor() {
        super();
        this.data = JSON.parse(this.textContent);
        this.name = this.data.name;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="profile">
                <div class="profile__image">
                    <img src="/image/${this.data.image}">
                </div>
                <div class="profile__name">${this.name}</div>
            </div>
        `;
    }
}

export default Profile;