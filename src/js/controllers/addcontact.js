const SERVER_URL = "https://young-thicket-66297.herokuapp.com";

function AddContactController ($scope, $http, $state) {
  console.log("Welcome to Contact Controller");
  $scope.contacts = [];
  $scope.addContact = function (data, contactId) {
    var url = `${SERVER_URL}/contacts/${contactId}`;
    $http.post(url, data).then(resp => {
      $state.go('contacts', { id: contactId });
    });
  };
}

AddContactController.$inject = ['$scope', '$http', '$state'];

export default AddContactController;
