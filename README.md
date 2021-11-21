# Project Summary

- The app must be a authenticated app. It can accept fake login with details, username: `foo`, password: `bar`.
- Post login route is '/home'. This route shows our main list UI. This page shouldn't be accessible by non logged in users.
- Logged in pages must show logout button. On click of this logout it will redirect to the login page.
- UI must be built using react.
- Display a contact list of user and photo.
- Initially only load a partial list and when user scrolls to end of page. App shows loading feedback and loads more contacts after a delay of 1 sec.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

