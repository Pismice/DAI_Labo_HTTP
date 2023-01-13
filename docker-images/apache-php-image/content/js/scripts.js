// Use this file to add JavaScript to your project

async function getAnimals() {
    let url = '/api';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

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

renderAnimals();