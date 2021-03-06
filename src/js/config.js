function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/contact-list.tpl.html',
      controller: 'ContactListController'
    })
     .state('contact-each', {

       url: '/contacts/:id',
       templateUrl: 'templates/contact-each.tpl.html',
       controller: 'ShowContactController'
     })
     .state('contact-add', {
       url: '/contacts',
       templateUrl: 'templates/contact-add.tpl.html',
       controller: 'AddContactController'
     })
     .state('page-not-found', {
       url: '/not-found',
       template: `<h2>No such page. Haha. You're dumb.</h2>`
     });

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
