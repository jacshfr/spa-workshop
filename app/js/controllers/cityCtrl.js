
angular.module('controllers').controller('CityCtrl', function($scope, $routeParams, $log, geoLocation, forecast, news) {
  'use strict';

  this.cityName = $routeParams.city;

  // Need to assign this to another variable in order to use it in nested contexts.
  var self = this;


  // Flatten the promise chain for better readability.
  // http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/
  geoLocation(this.cityName)
    .then(function(latLong) {
      // return forecast(latLong[0], latLong[1]);
      return forecast(latLong[0], latLong[1]);
    })
    .then(function(forecast) {
      var weather = forecast.data;
      self.currently = {};
      self.tonight = {};
      self.tomorrow = {};
      var millSec = weather.currently.time * 1000;
      var date = new Date(millSec);
      self.currently.date = date.toString();
      self.currently.summary = weather.currently.summary;
      self.currently.temp = weather.currently.temperature;
      self.currently.wind = weather.currently.windSpeed;
      self.tonight.summary = weather.hourly.data[5].summary;
      self.tonight.temp = weather.hourly.data[5].temperature;
      self.tomorrow.summary = weather.daily.data[1].summary;
      self.tomorrow.temp = weather.daily.data[1].temperatureMin;
      return news(self.cityName);
    })
    .then(function(news) {
      self.news = news;
    })
    .catch(function(err) {
      $log.error(err);
    });
});
