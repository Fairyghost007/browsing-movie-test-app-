# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#ScreenShoot

<img width="1440" alt="Screen Shot 2024-11-04 at 21 20 49" src="https://github.com/user-attachments/assets/b8816853-f75e-4061-abd0-ecae254e1d52">


# 🎬 Movie App

## Project Overview

This project is a **Movie App** built with React, designed to showcase your favorite movies or TV shows. You can add, display, and filter movies using titles and ratings. The project utilizes **React Hooks** to manage state and component lifecycles.

---

## Features

- **Display a list of movies**: Each movie displays its title, description, poster, and rating.
- **Add a new movie**: Users can add new movies to the list with all required attributes.
- **Filter movies**: Users can filter movies by title or rating to easily find what they’re looking for.

---

## Components

The app is divided into the following main components:

### 1. `MovieCard`
   - Displays the details of a single movie, including:
     - **Title**
     - **Description**
     - **Poster URL**
     - **Rating**

### 2. `MovieList`
   - Renders a list of all movies added by the user.
   - Uses the `MovieCard` component to display each movie.

### 3. `Filter`
   - Provides input fields for filtering movies by:
     - **Title**
     - **Rating**
   - Dynamically updates the displayed movies based on the filters applied.

---

## Movie Attributes

Each movie should contain the following attributes:

- **Title**: The name of the movie.
- **Description**: A brief description of the movie.
- **Poster URL**: A link to an image representing the movie poster.
- **Rating**: A numeric rating for the movie.

---

## User Stories

1. **Add a Movie**: Users should be able to add new movies by filling in a form with the required attributes.
2. **Filter Movies**: Users can filter the movie list by entering a title or selecting a minimum rating.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or above recommended)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/movie-app.git





## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
