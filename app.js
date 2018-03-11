(function() {
  var app = angular.module('store', []);


  app.factory("fetchGameList", function($http) {
    this.getlist = function() {
        return $http.get('https://house-rules-jgwrbs.herokuapp.com/api/gameList', {'Access-Control-Allow-Origin': 'localhost:*'})
            .then(function(response) {
              // console.log(response); //I get the correct items, all seems ok here
              return response.data;
            });
    }
    return this;
  }); // end of the fetchGameList factory




  app.controller('StoreController', [ '$scope', 'fetchGameList', function( $scope, fetchGameList ) {
    $scope.games = [];
    // this.games = games;
    fetchGameList.getlist().then(function(arrItems) {
      $scope.games = arrItems;
      console.log($scope.games);
    });
  }]); // end of the StoreController


})(); //end of app module
