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

	// time
	var sunriseDateObject = new Date(`${ data.results.date } ${ data.results.sunrise }`);
	var nowDateObject = new Date();
	var sunsetDateObject = new Date(`${ data.results.date } ${ data.results.sunset }`);
	var startSeconds = sunriseDateObject.getTime();
	var nowSeconds = nowDateObject.getTime();
	var endSeconds = sunsetDateObject.getTime();

	// colors
	var h1 = 250;
	var s1 = 100;
	var l1 = map(nowSeconds, startSeconds, endSeconds, 0, 50);

	var h2 = map(nowSeconds, startSeconds, endSeconds, 150, 30);
	var s2 = 100;
	var l2 = 50;

	var h3 = map(nowSeconds, startSeconds, endSeconds, 0, 200);
	var s3 = 100;
	var l3 = map(nowSeconds, startSeconds, endSeconds, 0, 50);

	document.documentElement.style.background = `
		linear-gradient(to bottom, hsl(${ h1 }, ${ s1 }%, ${ l1 }%), hsl(${ h2 }, ${ s2 }%, ${ l2 }%), hsl(${ h3 }, ${ h3 }%, ${ h3 }%))
	`;
}

function map(num, in_min, in_max, out_min, out_max) {
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
