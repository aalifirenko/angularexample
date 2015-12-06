angular
    .module('AuthApp')
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/login', {
                    templateUrl: 'modules/auth/templates/_auth.html',
                    controller: 'AuthCtrl',
                    pageTitle: 'Login Page'
                }).
                when('/', {
                    templateUrl: 'modules/auth/templates/_auth.html',
                    controller: 'AuthCtrl',
                    pageTitle: 'VK Friends'
                })
        }]);