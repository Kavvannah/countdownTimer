const newBeginnings = '04 June 2023';

function countDown() {
    const newDate = new Date(newBeginnings);
    const currentDate = new Date();

    console.log(newDate - currentDate);
}

countDown();

setInterval(countDown, 1000);//1 sec