// VARIABLES
// ——————————————————————————————————————

var key = '9a6e47f0fb1b6dd285305caf2bd7441a';
var zip = 10011;



// API 
// ——————————————————————————————————————

var URL = `https://api.openweathermap.org/data/2.5/weather?zip=${ zip }&units=imperial&appid=${ key }`;



// FETCH REQUEST 
// ——————————————————————————————————————

fetch( URL )
     .then((response) => {
        return response.json();
     })
     .then((data) => {
        render(data);
     });




// RENDER FUNCTION 
// ——————————————————————————————————————

function render( data ) {

    // get html elements
    var containerElement = document.querySelector('.Container');
    var weatherVaneElement = document.querySelector('.WeatherVane');
    var infoElement = document.querySelector('.Info');

    // edit info elements
    infoElement.innerHTML = `
        <h2>Temp: ${ data.main.temp } F</h2>
        <h4>Sunrise: ${ data.sys.sunrise } </h4>
        <h4>Sunset: ${ data.sys.sunset } </h4>
    `;

    //edit the container
    containerElement.style.background = `hsl(${ data.main.temp }, 100%, 50%)`;

    //edit the weather vane
    weatherVaneElement.style.transform = `rotate(${ data.wind.deg }deg)`;
    weatherVaneElement.style.animationDuration = `${ data.wind.speed / 30 }s` ;

    //edit the info


    console.log(data);
}