
const baseUrl = 'https://swapi.dev/api/';

const fetchData = (urlPart) => {
    return fetch(`${baseUrl}${urlPart}`)
        .then(response => response.json())
        .then(response => response.results);
};

const fetchResource = (url) => {
    url = url.split("swapi.dev/api/").pop();
    url = baseUrl + url;
    return fetch(url).then(response => response.json());
};

const getAllMovies = () => {
    return fetchData("films/");
};

const getCharacters = (urls) => {
    const requests = urls.map(url => getMovieCharacter(url));
    return Promise.all(requests);
};

const getResourcedName = (url) => {
    if (!url) {
        return Promise.resolve("n/a");
    }
    return fetchResource(url).then(homeworld => homeworld.name);
};

const getSpeciesDetails = (urls) => {
    if (!urls.length) {
        return Promise.resolve({
            genre: "n/a",
            language: "n/a",
            classification: "n/a",
        });
    }
    return fetchResource(urls[0]).then(species => {
        return {
            genre: species.name,
            language: species.language,
            classification: species.classification
        };
    });
};

const getPilotedStarships = (urls) => {
    if (!urls.length) {
        return Promise.resolve("none");
    }
    const requests = urls.map(url => getResourcedName(url));
    return Promise.all(requests).then(results => results.join(", "));
};

const getCharacterDetails = (character) => {
    const requests = [
        getResourcedName(character.homeworld),
        getSpeciesDetails(character.species),
        getPilotedStarships(character.starships),
    ];
    return Promise.all(requests).then(([homeworld, species, pilotedStarships]) => {
        character.homeworld = homeworld;
        character = Object.assign(character, species);
        character.pilotedStarships = pilotedStarships;
        return character;
    });
};

const getMovieCharacter = (url) => {
    return fetchResource(url).then(character => {
        return getCharacterDetails(character);
    });
};

const getSelectedMovie = (title) => {
    return fetchData(`films/?search=${title}`).then(movies => {
        const movie = movies[0];
        return getCharacters(movie.characters).then(characters => {
            movie.characters = characters;
            return movie;
        });
    });
};

const ResourcesService = {
    getAllMovies,
    getSelectedMovie
};

export default ResourcesService;