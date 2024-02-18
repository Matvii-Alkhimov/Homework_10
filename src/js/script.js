const elements = {
    daysEl: document.querySelector("[data-value='days']"),
    hoursEl: document.querySelector("[data-value='hours']"),
    minsEl: document.querySelector("[data-value='mins']"),
    secsEl: document.querySelector("[data-value='secs']"),
}

class CountdownTimer {
    constructor(obj) {
        this.selector = obj.selector;
        this.targetDate = obj.targetDate
    }
}

const date = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('01 01, 2024'),
});

console.log(date.targetDate)

const timer = setInterval(timerOn, 1000);

function timerOn() {
    const currentDate = new Date();
    const time = date.targetDate.getTime() - currentDate.getTime();
    
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    const currentDays = elements.daysEl.textContent;
    const currentHours = elements.hoursEl.textContent;
    const currentMins = elements.minsEl.textContent;
    const currentSecs = elements.secsEl.textContent;

    if (Number(currentDays) !== days) {
        switchTimeFunction(elements.daysEl, days);
    }
    if (Number(currentHours) !== hours) {
        switchTimeFunction(elements.hoursEl, hours);
    } 
    if (Number(currentMins) !== mins) {
        console.log(currentMins, mins)
        switchTimeFunction(elements.minsEl, mins);
    } 
    if (Number(currentSecs) !== secs) {
        switchTimeFunction(elements.secsEl, secs);
    }
}

function switchTimeFunction(elem, value) {
    elem.classList.add("changed");
    setTimeout(()=>{
        elem.classList.remove("changed");
        elem.textContent = value;
    }, 500);
}