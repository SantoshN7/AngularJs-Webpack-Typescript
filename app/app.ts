import * as angular from "angular";
import uiRouter from "@uirouter/angularjs";

var app = angular.module('wta', [uiRouter]);

// sample controller
app.controller('MainCtrl', function ($scope) {
  $scope.name = 'Santosh Nachan';
});

// sample route 
app.config(['$uiRouterProvider', function($uiRouter) {
  // If the user enters a URL that doesn't match any known URL (state), send them to `/welcome`
  const $urlService = $uiRouter.urlService;
  $urlService.rules.otherwise({ state: 'welcome' });

  const $stateRegistry = $uiRouter.stateRegistry;
  $stateRegistry.register({
    name: 'welcome',
    component: 'welcome'
  });
}]);

// sample component
const welcome = {
  template: `
    <div class="container-fluid">
      <h3>UI-Router Sample App</h3>
      <p>Welcome to the sample app!</p>
    </div>`
};

app.component('welcome', welcome);