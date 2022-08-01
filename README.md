## Description

This React with Typescript frontend project has two routes with two pages(using react-router-dom), and consumes two rest API calls, 
one to retrieve a list of albums, and one to retrieve a list of albums but filtered by user ID. 

We use the session storage to save the albums retrieved, so if you go back and forth beetwen pages, you don't have to call the APIs 
to retrieve the albums every time. 
 

## backend repository

Here's the url to the Backend repo of the photobook app:
https://github.com/alexbarresi/Photobook_APP_BE


# Tech stack
React with Typescript integration
React version: 18.2.0

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 1 - Git Clone 

So first things first, to view the photobook frontend app, we need to clone the project from a git repository specially created.

We can find the url in this same github repository page, https://github.com/alexbarresi/photobook_app_fe, in the 'code' tab, there's a green button named 'code', click on that and a popup will appear:


<img width="400" alt="Schermata 2022-07-31 alle 18 25 23" src="https://user-images.githubusercontent.com/10447666/182036084-b11a1cab-37a9-4636-bd0a-ac940c412960.png">

Under 'HTTPS' you will see the URL of the repo we need to clone, just copy the url.


Now VS Code time.

Open Visual Studio Code, and if you have the welcome page enabled, you should see this:

<img width="400" alt="Schermata 2022-07-31 alle 18 18 59" src="https://user-images.githubusercontent.com/10447666/182035782-2dd8e564-fc9d-4c45-adc5-832ffe1f3cf3.png">

Click on 'Clone Git Repository...' and paste the url that copied from gitHub.


In case if the welcome page is not enabled:

Go to Top Menu -> View -> Integrated Terminal

execute the command 'git clone https://github.com/alexbarresi/photobook_app_fe.git'


Now the project scaffold should appear to the left side of VScode. We successfully cloned the repository.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

To fully utilize the frontend app, it is advised to first start a localhost instance of the backend project.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


## Url deployed app

We use Vercel as a host to deploy photobook FE app.
url: https://photobook-app-fe.vercel.app/

Vercel automatically detects changes in the repository, and deploys the app to have the last updated version.

To fully use the App, it is advised to start a localhost backend instance to expose APIs

