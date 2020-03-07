import * as starWarsApi from './star-wars.api';

import axios from 'axios';

async function init() {
  const films = await starWarsApi.getCompleteFilms();
  console.log(films);

  const film = await starWarsApi.getFilmById(1);
  console.log(film);
}

async function exemplo() {
  try {
    const charactersRequestsb = await Promise.all([
      axios.get('https://swapi.co/api/people/1/'),
      axios.get('https://swapi.co/api/peop/1/'),
      axios.get('https://swapi.co/api/people/1/'),
      axios.get('https://swapi.co/api/people/1/')]);

    console.log(charactersRequestsb);
  } catch (error) {
    console.error(error);
  }
}

exemplo();

init();