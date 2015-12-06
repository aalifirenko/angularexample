// Define modules
angular.module('AuthApp', []);
angular.module('FriendsApp', []);


// Define main module
angular.module('MainApp',
    [
        'ngRoute',
        'ui.bootstrap',
        'ngAnimate',
        'ngSanitize',
        'AuthApp',
        'FriendsApp',
        'ngResource'
    ]
)
.run(['$location', '$rootScope', function ($location, $rootScope) {

    $rootScope.$on( '$routeChangeSuccess', function( event, current, previous ) {
        $rootScope.pageTitle = !current.$$route.pageTitle ? 'My App' : current.$$route.pageTitle;
    });

}]);