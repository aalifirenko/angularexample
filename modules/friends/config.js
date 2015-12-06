angular
    .module('FriendsApp')
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/friends', {
                    templateUrl: 'modules/friends/templates/_friends.html',
                    controller: 'FriendsCtrl',
                    pageTitle: 'Your Friends'
                })
        }]);