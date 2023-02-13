const newBeginnings = '04 June 2023';

function countDown() {
    const newDate = new Date(newBeginnings);
    const currentDate = new Date();

    const totalSeconds = (newDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, mins, seconds);
}

countDown();

setInterval(countDown, 1000);//1 sec