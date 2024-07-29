import { challenges } from './data.js';

function createCard(item) {
  const cards = document.getElementById('cards');
  const url = `./${item.name}`;
  const image = `./${item.name}/design/desktop-preview.jpg`;
  const repo = ``;

  const cardHTML = `
    <li class="card">
        <div class="image">
            <img src="${image}"/>
        </div>
        <article class="card-content">
            <h2>
                <a href="${url}" target="_blank">${item.title}</a>
            </h2>
            <small>
                <a href="#">Github repo</a>
            </small>
        </article>
    </li>`;

  cards.insertAdjacentHTML('beforeend', cardHTML);
}

function loadData() {
  challenges.forEach((item) => {
    createCard(item);
  });
}

loadData();
