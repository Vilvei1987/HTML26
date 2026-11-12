const kurssit = [
    { id: 101, nimi: 'JavaScript', taso: 'Aloittelija', aktiivinen: true },
    { id: 102, nimi: 'DOM', taso: 'Keskitaso', aktiivinen: true },
    { id: 103, nimi: 'CSS', taso: 'Aloittelija', aktiivinen: false },
    { id: 104, nimi: 'React', taso: 'Edistynyt', aktiivinen: true },
    { id: 105, nimi: 'Web-turvallisuus', taso: 'Keskitaso', aktiivinen: false }
];

const gridContainer = document.querySelector('.grid');

kurssit.forEach(kurssi => {
   
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const pTaso = document.createElement('p');
    const pTila = document.createElement('p');

    h2.textContent = kurssi.nimi;
    pTaso.textContent = `Taso: ${kurssi.taso}`;
    pTila.textContent = kurssi.aktiivinen ? 'Aktiivinen kurssi' : 'Kurssi päättynyt';

    article.classList.add('course-card');
    if (kurssi.aktiivinen) {
        article.classList.add('active');
    } else {
        article.classList.add('inactive');
    }

    article.appendChild(h2);
    article.appendChild(pTaso);
    article.appendChild(pTila);

    if (gridContainer) {
        gridContainer.appendChild(article);
    }
});