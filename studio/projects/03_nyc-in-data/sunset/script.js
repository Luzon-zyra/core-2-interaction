var lat = 38.907192;
var lng = -77.036873;
var URL = `https://api.sunrisesunset.io/json?lat=${ lat }&lng=${ lng }`;

fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        render(data);
    })

function render(data) {
    var sunriseDataObject = new Date(`${ data.results.date } ${ data.results.sunrise }`);
    var nowDataObject = new Date();
    var sunsetDataObject = new Date(`${ data.results.date } ${ data.results.sunset }`);

    var startSeconds = sunriseDataObject.getTime();
    var nowSeconds = nowDataObject.getTime();
    var endSeconds = sunsetDataObject.getTime();
    
    // Calculate percentage of the day
    var totalDayLength = endSeconds - startSeconds;
    var currentTime = nowSeconds - startSeconds;
    var percentageOfDay = currentTime / totalDayLength;

    // Get window dimensions
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;

    // Calculate circle position
    var circle = document.querySelector('.sun');
    var circleSize = windowWidth * 0.1; // Circle size as 10% of window width

    var newPositionX = windowWidth * percentageOfDay;
    var newPositionY = windowHeight / 2; // Center vertically

    // Update position every second for smoother transition
    setInterval(() => {
        // Update current time
        var nowDataObject = new Date();
        var nowSeconds = nowDataObject.getTime();
        var currentTime = nowSeconds - startSeconds;
        var percentageOfDay = currentTime / totalDayLength;
    

        // Calculate new position
        var newPositionX = windowWidth * percentageOfDay;

        // Adjust circle position
        circle.style.left = newPositionX - circleSize / 2 + 'px';
        }, 1000);

    console.log(newPositionX);
};


