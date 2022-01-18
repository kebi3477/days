class LoveTimer extends HTMLElement {
    constructor() {
        super();
        this.classList.add('lovetimer');
        this.room = JSON.parse(this.textContent);
        this.date = new Date(this.room.r_sdate);
        this.timeCheck();
    }

    timeCheck() {
        const now = new Date();
        const diff = now.getTime() - this.date.getTime();
        this.diffDate = Math.ceil(diff / (1000*60*60*24));
        this.timeFormat = `${now.getFullYear()}. ${now.getMonth()+1}. ${now.getDate()}`;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="lovetimer__label">${this.room.r_word}</div>
            <div class="lovetimer__day">${this.diffDate}일</div>
            <div class="lovetimer__date">${this.timeFormat}</div>
        `;
    }
}

export default LoveTimer;