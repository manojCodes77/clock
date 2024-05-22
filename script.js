setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hrotation = 30 * hours + minutes / 2;
    const mrotation = 6 * minutes;
    const srotation = 6 * seconds;

    const hoursElement = document.getElementById('hour');
    const minutesElement = document.getElementById('minute');
    const secondsElement = document.getElementById('second');

    hoursElement.style.transform = `rotate(${hrotation}deg)`;
    minutesElement.style.transform = `rotate(${mrotation}deg)`;
    secondsElement.style.transform = `rotate(${srotation}deg)`;

}, 1000);
// here 1000 stands for 1000ms = 1s
// set interval is a function that takes two arguments, first is the function that we want to run and the second is the time in ms after which we want to run the function