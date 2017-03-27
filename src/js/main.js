import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';

import ContactListController from './controllers/contact-list';
import ShowContactController from './controllers/showContact';
import AddContactController from './controllers/addContact';

angular
  .module('app', ['ui.router'])
  .config(AppConfig)
  .controller('ContactListController', ContactListController)
  .controller('ShowContactController', ShowContactController)
  .controller('AddContactController', AddContactController);
