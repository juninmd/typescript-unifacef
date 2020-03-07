import axios from 'axios';

const baseURL = 'https://swapi.co/api/';

export const getFilms = async (): Promise<ResultFilms[]> => {
    try {
        const { data: { results } } = await axios.request({ baseURL, url: 'films' });
        return results;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export interface ResultFilms {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: Date;
    edited: Date;
    url: string;
}

export interface RootFilms {
    count: number;
    next?: any;
    previous?: any;
    results: ResultFilms[];
}


export const getFilmById = async (filmId: number) => {
    try {
        const { data } = await axios.request({ baseURL, url: `films/${filmId}` });

        const charactersRequests = await Promise.all(data.characters.map(characterUrl => {
            return axios.get(characterUrl);
        }));

        const characters = charactersRequests.map((y: any) => y.data).map((x) => {
            return {
                name: x.name,
                gender: x.gender,
                birthYear: x.birth_year,
                eyeColor: x.eye_color,
                height: x.height,
                mass: x.mass,
                photo: getCharacterImageUrl(x.url)
            }
        });

        data.characters = characters;

        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getCharacterById = async (filmId: number) => {
    try {
        const { data } = await axios.request({ baseURL, url: `character/${filmId}` });
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const getCharacterImageUrl = (url: string) => {
    const getCharacterId = url.split('/')[5];
    return `https://starwars-visualguide.com/assets/img/characters/${getCharacterId}.jpg`;
}

export const getCompleteFilms = async () => {
    const films = await getFilms();

    for (const film of films) {
        const charactersRequests = await Promise.all(film.characters.map(characterUrl => {
            return axios.get(characterUrl);
        }));

        const characters = charactersRequests.map((y: any) => y.data).map((x) => {
            return {
                name: x.name,
                gender: x.gender,
                birthYear: x.birth_year,
                eyeColor: x.eye_color,
                height: x.height,
                mass: x.mass,
                photo: getCharacterImageUrl(x.url)
            }
        });

        (<any>film.characters) = characters;
    }

    return films;
}