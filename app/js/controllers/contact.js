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
}
ContactController.$inject = ['$scope', '$http', '$state'];

export default ContactController;
