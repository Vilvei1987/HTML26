const tuote = {
    nimi: 'Näppäimistö',
    hinta: 79,
    saatavilla: true
};

const productsContainer = document.querySelector('.products');

const article = document.createElement('article');
const h2 = document.createElement('h2');
const p = document.createElement('p');
const button = document.createElement('button');

h2.textContent = tuote.nimi;
p.textContent = `${tuote.hinta} €`;
button.textContent = tuote.saatavilla ? 'Osta' : 'Loppu varastosta';

if (!tuote.saatavilla) {
    article.classList.add('sold-out');
}

article.appendChild(h2);
article.appendChild(p);
article.appendChild(button);


if (productsContainer) {
    productsContainer.appendChild(article);
}
