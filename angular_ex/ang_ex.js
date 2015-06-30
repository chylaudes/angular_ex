var app = angular.module('ngFun', []);


app.controller('PokemonCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.pokemons = [
    {
      Ndex: 25,
      name: 'Pikachu',
      type: 'Electric'
    },
    {
      Ndex: 10,
      name: 'Caterpie',
      type: 'Bug'
    },
    {
      Ndex: 39,
      name: 'Jigglypuff',
      type: 'Fairy'
    },
    {
      Ndex: 94,
       name: 'Gengar',
      type: 'Ghost'
    },
    {
      Ndex: 143,
      name: 'Snorlax',
      type: 'Normal'
    }
  ];
  $scope.catchphrase = "Gotta Catch them All!";

$scope.trainer = {
  name: "Ash"
};
}]);

app.filter('reverse', function() {
  return function(item) {
    var a = item.toLowerCase().split("").reverse().join("");
    return a[0].toUpperCase()+ a.slice(1);
  };
});


//c[0].toUpperCase()+c.slice(1).join("").toLowerCase()

//Ang.js uses html tags to end the scope of pokemon
