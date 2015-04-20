restaurantApp.controller('RestaurantCtrl', function RestaurantCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, type: $scope.foodType, address: $scope.address, price: $scope.pricePoint });
    $scope.restaurantName = null;
    $scope.foodType = null;
    $scope.address = null;
    $scope.pricePoint = null;
  };
  $scope.deleteRestaurant = function(name) {
    var place = $scope.restaurants.indexOf(name);
    $scope.restaurants.splice(place, 1);
  };
});
