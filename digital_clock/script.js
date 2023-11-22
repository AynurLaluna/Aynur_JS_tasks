
function displayTime() {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();



    document.getElementById('hours').innerText = hour;
    document.getElementById('minutes').innerText = minute;
    document.getElementById('seconds').innerText = second;

}
setInterval(displayTime, 1000);
displayTime();