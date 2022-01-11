import fetchModule from '/module/fetch.js';

class Main extends HTMLElement {
    constructor(props) {
        super(props);
        this.getUsers();
    }

    async getUsers() {
        const room = localStorage.getItem('days-room');
        const users = await fetchModule.get(`/user/all/${room}`);
        this.startDate = users[0].r_sdate;
        this.user1 = users[0] && JSON.stringify(users[0]);
        this.user2 = users[1] && JSON.stringify(users[1]);
        this.render();
    }

    render() {
        if(!document.querySelector('footer-menu')) {
            document.body.innerHTML = `
                <main><main-page></main-page></main>
                <footer-menu></footer-menu>
            `;
        }
        this.innerHTML = `
            <header-menu></header-menu>
            <love-timer>${this.startDate}</love-timer>
            <div class="profile__list">
                <profile-item>${this.user1}</profile-item>
                <img src="icon/heart.svg">
                <profile-item>${this.user2}</profile-item>
            </div>
        `;
    }
}

export default Main;