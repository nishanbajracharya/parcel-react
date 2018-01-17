[![Build Status](https://travis-ci.org/nishanbajracharya/parcel-react.svg?branch=master)](https://travis-ci.org/nishanbajracharya/parcel-react)
[![dependencies Status](https://david-dm.org/nishanbajracharya/parcel-react/status.svg)](https://david-dm.org/nishanbajracharya/parcel-react)
[![devDependencies Status](https://david-dm.org/nishanbajracharya/parcel-react/dev-status.svg)](https://david-dm.org/nishanbajracharya/parcel-react?type=dev)
# Parcel React
A basic [React](https://reactjs.org/) starter using [Parcel](https://parceljs.org/), a zero configuration web application bundler.

## Tech Stack

### Dependencies
|Library|Version|
|-------|-------|
|[react](https://reactjs.org)|16.2.0|
|[normalize.css](https://necolas.github.io/normalize.css/)|7.0.0|

### Dev dependencies
|Library|Version|
|-------|-------|
|[eslint](https://eslint.org/)|4.15.0|
|[jest](https://facebook.github.io/jest/)|22.1.1|
|[parcel-bundler](https://parceljs.org/)|1.4.1|

## Getting Started
Go through the following steps to get started

- Clone this repo

    ```shell
    git clone https://github.com/nishanbajracharya/parcel-react.git
    ```
- Go to the project directory and remove the git config

    ```shell
    cd parcel-react && rm -r .git
    ```
- Install all the dependencies
    ```shell
    npm install
    ```

## Usage
To start developing, open the project in a code editor and edit `app.js` in the `src/js` directory. Hot module replacement and development server are available in the parcel-bundler out of the box, so run the project using the following commands.

- Development server (http://localhost:3000/)

    ```shell
    npm run start
    ```
    The port the server runs in can be changed by updating `-p 3000` argument in the start script in the `package.json` file.
- Production build

    ```shell
    npm run build:production
    ```
    The build will be available in the `dist/` directory.
- Lint

    ```shell
    npm run lint
    npm run lint:fix
    ```
    The project comes with a predefined eslint config with recommended react configs. Lookup `eslintrc.json` within the project to learn more. Run `lint:fix` to automatically fix lint issues.
- Test

    ```shell
    npm run test
    npm run test:update
    ```
    All tests in the project are performed using `jest`. The test file is defined using the `spec` extension, eg. `app.spec.js`. An example snapshot test is included in this starter. Run `test:update` to update the snapshots.

## Contributing
To contribute, follow one of the two options

- **Open an Issue**

  Open an issue detailing:
  1. What the issue is
  2. Steps to reproduce
  3. Possible solutions

  Note: These details are recommended but are entirely optional.

- **Send a Pull Request**

  Fork this project and send a pull request to the `master` branch.

## License
This project is licensed under the MIT License.
