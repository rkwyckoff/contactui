const SERVER_URL = "https://young-thicket-66297.herokuapp.com";

function AddContactController ($scope, $http, $state) {
  //console.log("Welcome to Contact Controller");
  //$scope.contacts = [];
  $scope.addContact = function () {
    //console.log("inside addcontact")
    //var url = `${SERVER_URL}/contacts/${contactId}`;
    //console.log(`${SERVER_URL}/contacts/${contactId}`)
    // $http.post(url, data).then(resp => {
      $state.go("contact-add");

  };
}

AddContactController.$inject = ['$scope', '$http', '$state'];

export default AddContactController;

// $scope.addCocktail = function (cocktail) {
//  +    cocktail.id = $scope.cocktails.length + 1;
//  +    $scope.cocktails.push(cocktail);
