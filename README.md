# <img src="https://github.com/katerina-tziala/star-wars/blob/master/public/logo192.png" alt="react" width="44" height="44" align="left"> Star Wars

A Single Page Application using React.js and the [Star Wars API](https://swapi.dev/) to display information about star wars.

## Running the App Locally

1. Fork and clone this repository.

2. To install the dependencies of the app, run  in the project directory: ``` npm install ``` or ``` npm i ```
    

3. To start the app, run  in the project directory: ``` npm start ``` 

4. Access the app locally at: http://localhost:3000/


## Features

- Search star wars movies with autocomplete suggestion
- View the details of a movie including the characters and their essential information
- Users should can share the link of the selected movie, with a different user. The link navigates the receiving user to the page with correct results displayed, preserving the state of the page
- State management with Redux
- Responsive Design


## Future Improvements
- Implementation of a Server Worker to cache static files and requests in order to return results faster.
- Use of a UI library like, Bootstrap, Tailwind to improve UI
- Implementation of Lazy Loading to render elements on demand (React.lazy() and React.Suspense).
- Unit and End to End Testing.
