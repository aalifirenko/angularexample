angular
    .module('FriendsApp')
    .controller('FriendsCtrl', ['$scope', '$location', '$routeParams', '$http', 'user',
        function ($scope, $location, $routeParams, $http, user) {

            $scope.logout = function () {
                user.logout(function () {
                    $location.path('/login');
                    $scope.$apply();
                });
            };

            if (localStorage.getItem('order')) {
                $scope.predicate = localStorage.getItem('order');
            }

            if (localStorage.getItem('reverse')) {
                $scope.reverse = localStorage.getItem('reverse');
            }

            $scope.order = function (predicate) {
                $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
                $scope.predicate = predicate;

                localStorage.setItem('order', predicate);
                localStorage.setItem('reverse', $scope.reverse);
            };

            user.access(function (status) {
                if (!status) {
                    $location.path('/login');
                    $scope.$apply();
                } else {
                    if (localStorage.getItem('user_id')) {
                        user.getFriendsList(function (data) {
                            if (!data) {
                                alert('Error get list');
                            } else {
                                $scope.$apply(function() {
                                    $scope.users = data['response'];
                                });
                            }
                        });
                    } else {
                        $scope.logout();
                    }
                }
            });
        }]);