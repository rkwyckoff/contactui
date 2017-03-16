import angular from 'angular';
import 'angular-ui-router';

import AppConfig from './config';

import ContactController from './controllers/contact';
import ShowContactController from './controllers/showContact';
import AddContactController from './controllers/addContact';

angular
  .module('app', ['ui.router'])
  .config(AppConfig)
  .controller('ContactController', ContactController)
  .controller('ShowContactController', ShowContactController)
  .controller('AddContactController', AddContactController);
