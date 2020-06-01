const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let start = document.querySelector('button[data-action="start"]'),
    stop = document.querySelector('button[data-action="stop"]'),
    body = document.querySelector("body"),
    timerId;

start.addEventListener("click", () => {
    start.setAttribute("disabled", "disabled");
    timerId = setInterval(() => {
        body.style.backgroundColor =
            colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, 1000);
});

stop.addEventListener("click", () => {
    start.removeAttribute("disabled");
    clearInterval(timerId);
});