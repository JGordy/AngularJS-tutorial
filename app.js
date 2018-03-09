(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.product = game;

  });

  var game = {
    name: "Scrabble",
    type: "Board",
    description: "Super nerdy word game that everyone loves"
  }

})();
