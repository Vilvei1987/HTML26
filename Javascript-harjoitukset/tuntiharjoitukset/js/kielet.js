const kielet = ['HTML', 'CSS', 'JavaScript'];

const lista = document.querySelector('#languages');

for (const kieli of kielet) {
    const listaelementti = document.createElement('li');
    listaelementti.textContent = kieli;
    lista.append(listaelementti);
}