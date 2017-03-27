const SERVER_URL = "https://young-thicket-66297.herokuapp.com";

function ContactListController ($scope, $http, $state) {
  $scope.contacts = [];

  function init () {
    $http.get(`${SERVER_URL}/contacts`).then(resp => {
      $scope.contacts = resp.data;
    });
  }

  init();
 }
ContactListController.$inject = ['$scope', '$http', '$state'];

export default ContactListController;
