import date from "../module/date.js";

class Ddays extends HTMLElement {
    constructor(props) {
        super(props);
        this.today = new Date();
        this.start = new Date(this.textContent);
        this.dday = this.diffDate(this.today, this.start);
        this.render();
        this.setCards();
    }
    diffDate(adate, bdate) {
        return Math.ceil((adate.getTime() - bdate.getTime()) / (1000*60*60*24));
    }
    setCards() {
        const cover = this.querySelector('.ddays__cover');
        const start = Math.floor(this.dday / 50);
        for(let i = start+1; i < start+9; i++) {
            const card = document.createElement('div');
            const diff = i*50;
            const ddate = new Date();
            ddate.setDate(this.start.getDate() + diff -1);
            const dday = this.diffDate(ddate, this.today);

            card.classList.add('ddays__card');
            card.innerHTML = `
                <div class="ddays__row">
                    <div class="ddays__col">
                        <div class="ddays__label ddays__label--bold">${diff}일</div>
                        <div class="ddays__label ddays__label--light">${date.normal(ddate)}</div>
                    </div>
                    <div class="ddays__label ddays__label--red">D-${dday}</div>
                </div>
            `;
            cover.append(card);
        }
    }
    render() {
        this.innerHTML = `
            <div class="ddays__title"><b>우리의 시작일</b> - ${date.normal(this.start)} ♥</div>
            <div class="ddays__list">
                <div class="ddays__cover">
                    <div class="ddays__card">
                        <div class="ddays__row">
                            <div class="ddays__col">
                                <div class="ddays__label ddays__label--bold">${this.dday}일</div>
                                <div class="ddays__label ddays__label--light">${date.normal(this.today)}</div>
                            </div>
                            <div class="ddays__label ddays__label--red">오늘</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

export default Ddays;