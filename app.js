(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = games;

  });

  var games = [
    {
      name: "Scrabble",
      type: "Board",
      description: "Super nerdy word game that everyone loves"
    },
    {
      name: "Exploding Kittens",
      type: "Card",
      description: "Survive the Exploding Kitten onslaught!"
    }
  ];

})();
