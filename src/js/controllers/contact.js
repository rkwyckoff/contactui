const SERVER_URL = "https://young-thicket-66297.herokuapp.com";

function ContactController ($scope, $http, $state) {
  console.log("Welcome to Contact Controller");
  $scope.contacts = [];

  function init () {
    $http.get(`${SERVER_URL}/contacts`).then(resp => {
      $scope.contacts = resp.data;
    });
  }

  init();
  $scope.addContact = function () {
    //console.log("inside addcontact")
    //var url = `${SERVER_URL}/contacts/${contactId}`;
    //console.log(`${SERVER_URL}/contacts/${contactId}`)
    // $http.post(url, data).then(resp => {
      $state.go("contact-add");

  };
}
ContactController.$inject = ['$scope', '$http', '$state'];

export default ContactController;
