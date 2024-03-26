


var mainElement = document.querySelector('.container');

// mainElement.innerHTML = perfumes[5].image;

function insertPerfumeData(perfume) {
    mainElement.innerHTML += `
        <div class="Name">
            <a href="${ perfume['link'] }">
                <img src="./assets/img/${perfume['image']}" />
            </a>
        </div>
    `;
}

perfumes.forEach((perfume) => {
    insertPerfumeData(perfume);
});
