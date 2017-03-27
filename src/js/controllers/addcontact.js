const SERVER_URL = "https://young-thicket-66297.herokuapp.com";

function AddContactController ($scope, $http, $state) {

  $scope.addContact = function(contact) {
    var url = `${SERVER_URL}/contacts`;
    $http.post(url, contact).then(resp => {
      $state.go("home");
    });
  }

}

AddContactController.$inject = ['$scope', '$http', '$state'];

export default AddContactController;
