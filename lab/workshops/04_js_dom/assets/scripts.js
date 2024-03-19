// log the costumes array
// console.log('costumes ',costumes)

// log property with bracket notation
// console.log("costumes[0]['title']: ", costumes[0]['title']);

// log property with dot notation
// console.log("costumes[0].title: ", costumes[0].title);

//CONSOLE AND DOCUMENT OBJECTS
// ---------------------------------

// log the console object
// console.log(console);

// log the document object
// console.log(document);

// log the document element
// console.log(document.documentElement);

// EDITING THE DOCUMENT ELEMENT
// ---------------------------------

// edit directly
// document.documentElement.style.background = 'pink';

// define a new functions
// function setBackgroundColor(){
//     document.documentElement.style.background = 'pink';
// }

// //run the function
// setBackgroundColor();

function setBackgroundColor(color){
   document.documentElement.style.background = color;}

//run the function
setBackgroundColor('pink');

// set main element variable

var mainElement = document.querySelector('.Main');

// UPDATING AN HTML ELEMENT
// ---------------------------------

// edit directly
// mainElement.style.background = 'white';
// mainElement.innerHTML = 'Hello World'

// edit with object property
// mainElement.innerHTML = costumes[0].title;
// mainElement.innerHTML = costumes[1]['title'];

// function
// function insertCostumeData(costume) {
//     mainElement.innerHTML = mainElement.innerHTML + costume['title'];
// }
    // add text to innterHTML
function insertCostumeData(costume) {
    // mainElement.innerHTML += costume['title'];

    // add template string
    // mainElement.innerHTML += `
    //     <div>
    //         ${costume['title'] }
    //     </div>
    // `;

    // insert advanced HTML
    mainElement.innerHTML += `
        <article class="Kirby">
            <h2>${ costume['title'] }</h2>
            <img src="./media/${ costume['image']}" />
            <p>${ costume['powers'] }</p>
        </article>
    `;
}

// manual insertion
// insertCostumeData(costumes[0]);
// insertCostumeData(costumes[1]);
// insertCostumeData(costumes[2]);
// insertCostumeData(costumes[3]);

// FOR EACH LOOPS
// ---------------------------------

costumes.forEach((costume) => {
    insertCostumeData(costume);
});

console.log(costume);
