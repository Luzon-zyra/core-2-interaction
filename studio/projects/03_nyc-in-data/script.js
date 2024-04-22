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
    
    console.log(sunriseDataObject, sunsetDataObject, nowDataObject, startSeconds, nowSeconds, endSeconds);
};
