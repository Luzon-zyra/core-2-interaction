var secondsElement = document.querySelector('.seconds');
console.log(secondsElement);



function setTime() {
    var dateSeconds = new Date();
    var seconds = dateSeconds.getSeconds();
    secondsElement.innerHTML = seconds;
    console.log(seconds);
};

setInterval(setTime, 1000);
