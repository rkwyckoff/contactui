const SERVER_URL = "https://young-thicket-66297.herokuapp.com";

function ShowContactController ($scope, $http, $stateParams) {

  function init() {
    var contactId = $stateParams.id;
    var url = `${SERVER_URL}/contacts/${contactId}`;
    $http.get(url).then(resp => {
      $scope.contact = resp.data;
    })
  }
  init();
}
ShowContactController.$inject = ['$scope', '$http', '$stateParams'];

export default ShowContactController;
