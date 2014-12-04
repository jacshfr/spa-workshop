[![Build Status](https://travis-ci.org/jacshfr/spa-workshop.svg)](https://travis-ci.org/jacshfr/spa-workshop)

# SPA Workshop

In this workshop you'll be building and deploying an AngularJS single page application on the Aerobatic platform. The app itself is a city portal that displays local information for various cities around the world. This repo provides the basic scaffolding that you can fork to get started. It retrieves the weather for a given city using the [forecast.io API](https://developer.forecast.io/) and local news headlines using the Google News RSS feed. You can see a live demo of this starter template at [http://spa-workshop.aerobaticapp.com](http://spa-workshop.aerobaticapp.com).


### Getting Started
1. Login to [http://www.aerobatic.com](http://www.aerobatic.com) with your GitHub credentials.
2. Install the yoke command line tool with npm: `npm install -g yoke-cli`
3. Fork this repo to your own personal or organization account and clone it locally.
4. In your terminal `cd` into the directory where you cloned the repo.
4. Initialize your Aerobatic credentials by running `yoke login`.
5. Create a new Aerobatic application with the command: `yoke create-app`. Be sure to select `existing app` when prompted.
6. Run `npm install`.
7. Register for an API key at [forecast.io](https://developer.forecast.io/). Copy your API key to a new environment variable in your Aerobatic app dashboard called `FORECAST_IO_API_KEY`. Check the _Server Only_ box to prevent the setting from being sent down to the browser in your index page.
8. Open your app in development mode with: `yoke sim -o`.
9. Start coding. Livereload should automatically keep your browser in sync as you save files.
10. Before deploying to production, verify the release build of the app run without errors by re-running the simulator in release mode: `yoke sim -o --release`. This will execute the build step specified in the scripts section of `package.json` before launching the app.
11. If everything looks good, you're ready to deploy to production: `yoke deploy`.


### Enhancement Ideas
Here's some thoughts on how you might improve upon the scaffolded app. These are merely suggestions, feel free to get creative and make the app your own.

* Make it look better (the bar is very low to begin)
* Update `geoLocationService.js` to invoke a geo-location API (like the [Google Maps API](https://developers.google.com/maps/documentation/javascript/geocoding)) rather than hardcoding the lat/long values.
* Generalize the app to work with any arbitrary city rather than a predetermined list.
* Show a loading indicator while API calls are in progress.
* Enhance the current weather conditions to include a future forecast
* Use the HTML5 location API to auto-suggest which city the current user is in
* Use a more web friendly representation of the city name in the URL, i.e. `cities/new-york` rather than `cities/New%20York`
* Display a map of the city
* Show the local date and time in the city
* Refactor `cityCtrl.js` to make the API calls to the Forecast and News services in parallel rather than serially. How might this code look were a dozen different APIs invoked to build the page? This article may be of use: [http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/](http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/).
* Implement Angular animations for the view changes, for example a slide-in/out transition.
* Internationalize the app with [angular-translate](http://angular-translate.github.io/). You could also show news headlines in the language spoken in a particular city by tweaking the parameters to the Google News RSS feed.

