<br>

![](https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/setting-64.png)
***
***
***

# It's been a while, how to get back up and running

## Pre:
Install these first
* Git
* Node & NPM
* Terminal
* IDE

## Check versions using Terminal:
A simple way to check they have been installed, actual version should not matter.
* git -v
* node -v
* npm -v

## Get code:
Repo = **Playground**, clone the repo to wherever you want.

## Run code:
* npm install
* npm audit fix
* npm start

<br>

![](https://cdn1.iconfinder.com/data/icons/unicons-line-vol-5/24/react-64.png)
***
***
***

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### Useful links
* https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/
* https://medium.com/how-to-react/different-ways-to-loop-through-arrays-and-objects-in-react-39bcd870ccf

<br>

![](https://cdn1.iconfinder.com/data/icons/unicons-line-vol-2/24/code-branch-64.png)
***
***
***

# Project
Built using **React** with **create-react-app** to showcase my CV, client work and code demo's or projects. Using **Firebase** to deploy and host data and **Github** as source control. Styles based on **Bootstrap**.

## To run locally
Navigate to parent folder and run `npm start`.\
If there is an issue with this make sure you are using the latest Node and NPM for create-react-app.

## Branching
Live website points to code within the `master` branch, branch from this for any updates then push and merge back to `master` via a **Pull Request**, this process will kick off automatic **Actions** for deploy to live process.

## To add a new page
**Such as a case study**
* In `src` create a new .js file with your page (e.g AppCaseClientName.js), this is the file which will contain all the specific page information and code
* You then need to add a link to your new page on the homepage so you can navigate to it. This is done by adding a link to the specific area on the `App.js` file
* As we are using a **React Router** to move between pages we need to reference our new page on `index.js` in the list of **Route Paths** after **importing** the new page at top of file
* To add the content to your new page you need to create a specific data source under `assets > data > dataCaseClientName.js` and then make sure all the references to it are correct on your new page
* Viewing an existing page will help with this
