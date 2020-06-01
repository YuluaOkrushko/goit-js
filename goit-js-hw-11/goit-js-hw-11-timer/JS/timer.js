class CountdownTimer {
    constructor(timer) {
        this.selector = timer.selector;
        this.targetDate = timer.targetDate;
        this.secsField = document.querySelector(this.selector + ' [data-value="secs"]')
        this.minsField = document.querySelector(this.selector + ' [data-value="mins"]')
        this.hoursField = document.querySelector(this.selector + ' [data-value="hours"]')
        this.daysField = document.querySelector(this.selector + ' [data-value="days"]')
        this.init();
    }
    init() {
        setInterval(() => {
            let time = this.targetDate - new Date();
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            this.secsField.textContent = secs;
            this.minsField.textContent = mins;
            this.hoursField.textContent = hours;
            this.daysField.textContent = days;
        }, 1000)
    }
}
new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 20, 2020'),
});