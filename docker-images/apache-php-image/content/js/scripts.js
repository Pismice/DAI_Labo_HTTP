// Use this file to add JavaScript to your project

// Retourne la liste des animaux (en json)
async function getAnimals() {
    let url = '/api';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// Render les animaux sur le site en HTML
async function renderAnimals() {
    let animals = await getAnimals();
    let html = '';
    animals.forEach(animal => {
        let htmlSegment = `<div class="user">
                            <img src="${animal.avatar}" >
                            <h2>${animal.animal} ${animal.firstName}</h2>
                            <div class="email"><a href="email:${animal.gender}">${animal.profession}</a></div>
                        </div>`;
        html += htmlSegment;
    });

    let container = document.getElementById("data");
    container.innerHTML = html;
}

// Render de nouveaux animaux toutes les secondes
setInterval(() => {
    this.renderAnimals();
}, 1000);