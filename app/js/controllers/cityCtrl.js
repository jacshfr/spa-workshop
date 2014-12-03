
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
      self.forecast = forecast.data.currently.temperature;
      return news(self.cityName);
    })
    .then(function(news) {
      self.news = news[0].title;
    })
    .catch(function(err) {
      $log.error(err);
    });
});
