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

### `npm run eject`

## Scripts used in this project

### `npm install -D typescript-plugin-css-modules`

Install CSS Modules plugins on development environment.

### `npm install -D sass`

Install SASS on development environment.

### `npm install normalize.css`

Install a CSS reset.

### `npm install classnames`

Install calssNames, a simple JavaScript utility for conditionally joining classNames together.

## ESLint

### `npm init @eslint/config`

In this project, the option "To check syntax, find problems, and enforce code style" was choosen.

### `npx eslint ./src --fix`

ESLint fixes all the code issues from ./src folder.

After that, an error about "React must be in scope when using jsx" will persist. To ignore this error, the following instruction must be added to the rules on .eslintrc.json:

`"react/react-in-jsx-scope": "off"`
