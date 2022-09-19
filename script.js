const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minsE1 = document.getElementById('mins');
const secondsE1 = document.getElementById('seconds');


const comingYear = new Date().getFullYear() + 1;

function getTrueNumber(time) {
    return time < 10 ? `0${time}` : time;
  }

function countDown(){
    const now = new Date();
    const newYearTime = new Date(`Jan 1 ${comingYear} 00:00`);
  
    const diff = newYearTime - now;
  
    const days = Math.floor (diff / 1000 / 60 /60 /24);
    const hours = Math.floor (diff / 1000 / 60 /60)% 24;
    const minutes = Math.floor (diff / 1000 / 60) % 60;
    const seconds = Math.floor (diff / 1000 )% 60;

daysE1.innerHTML = getTrueNumber(days);
hoursE1.innerHTML = (hours);
minsE1.innerHTML =(minutes);
secondsE1.innerHTML =(seconds);

}

function formatTime(time){
    return time < 10 ?(`0 ${time}`):time;
}

countDown();

setInterval(countDown ,1000);