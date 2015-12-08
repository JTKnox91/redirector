angular.module('redirecter')

.factory('httpFactory', ['$location', '$http', function ($location, $http) {

  var createSurvey = function (surveyName) {
    return $http({
      method: 'POST',
      url: '/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {survey: surveyName}
    });
  };

  var createURLS = function (surveyName, urls) {
    return $http({
      method: 'PUT',
      url: '/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {survey: surveyName, urls: urls}
    });
  };

  return {
    createEvent: createEvent,
    createURLS: createURLS
  };
}])

.controller('HomeController', ['$scope', 'httpFactory', function ($scope, httpFactory) {

  $scope.surveyName = null;

  $scope.urls = null;

  $scope.directions = "Please enter a survey name.";

  $scope.createSurvey = function () {
    if ($scope.surveyName) {
      httpFactory
        .createEvent($scope.surveyName)
        .then(function (response, err) {
          if (err) {
            $scope.directions = "Survey name is already taken.";
          } else {
            $scope.directions = 
              "Your custom url will be:\n"+
              resonse.data + "/" + "<participant-name>\n"+
              "Please enter your participants below in this format:\n"+
              "'participant1_name full_url_to_redirect_to1'\n"+
              "'participant2_name full_url_to_redirect_to2'\n"+
              "Note: particiant name cannot have spaces or special characters";
          }
        });
    }
  };

  $scope.createURLS = function () {
    if ($scope.urls) {
      httpFactory
        .createURLS($scope.surveyName, $scope.urls)
        .then(function (response, err) {
          if (err) {
            $scope.directions = "Error while parsing links";
          } else {
            $scope.directions = "Your redirects have been created";
          }
        });
    }
  };

}]);