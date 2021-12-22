class Calendar extends HTMLElement {
    constructor() {
        super();
        this.today = new Date();
        this.year = this.today.getFullYear();
        this.month = this.today.getMonth()+1;
        this.render();
        this.setCalendar();
        this.setEvent();
    }

    setCalendar() {
        const first = new Date(this.year, this.month-1, 1);
        const last = new Date(this.year, this.month, 0);
        const weeks = Math.ceil(last.getDate() / 7);
        const body = this.querySelector('.calendar__body');

        for(let i = 0; i < weeks+1; i++) {
            const row = document.createElement('div');
            row.classList.add('calendar__row');
            for(let j = 1; j < 8; j++) {
                const div = document.createElement('div');
                const day = i*7+j-first.getDay();
                if(i === 0) {
                    if(j > first.getDay()) {
                        div.innerText = day;
                    }
                } else if(i >= weeks) {
                    if(day <= last.getDate() && j <= last.getDay()+1) {
                        div.innerText = day;
                    }
                } else {
                    if(day <= last.getDate()) {
                        div.innerText = day;
                    }
                }
                row.append(div);
            }
            body.append(row);
        }

        document.querySelectorAll('.calendar > *').forEach(el => {
            el.animate([
                {opacity: '0'},
                {opacity: '1'}
            ], 500);
        })
    }

    setEvent() {
        this.querySelector('.calendar__button.prev').onclick = () => {
            if(this.month-1 < 1) {
                this.year -= 1;
                this.month = 12;
            } else {
                this.month -= 1;
            }
            this.render();
            this.setCalendar();
            this.setEvent();
        }
        this.querySelector('.calendar__button.next').onclick = () => {
            if(this.month+1 > 12) {
                this.year += 1;
                this.month = 1;
            } else {
                this.month += 1;
            }
            this.render();
            this.setCalendar();
            this.setEvent();
        }
    }
    
    render() {
        this.innerHTML = `
            <div class="calendar">
                <div class="calendar__header">
                    <div class="calendar__button prev">
                        <object data="/icon/prev.svg" type="image/svg+xml"></object>
                    </div>
                    <div class="calendar__label">${this.year}. ${this.month}.</div>
                    <div class="calendar__button next">
                        <object data="/icon/next.svg" type="image/svg+xml"></object>
                    </div>
                </div>
                <div class="calendar__body">
                    <div class="calendar__row week">
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                        <div>Sun</div>
                    </div>
                </div>
                <div class="schedule__title">Today</div>
            </div>
        `;
    }
}

export default Calendar;