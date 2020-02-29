import * as starWarsApi from './star-wars.api';

async function init() {
  const films = await starWarsApi.getCompleteFilms();
  console.log(films);

  const film = await starWarsApi.getFilmById(1);
  console.log(film);

}

init();