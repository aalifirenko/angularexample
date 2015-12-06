angular
    .module('AuthApp')
    .controller('AuthCtrl', ['$scope', '$location', '$routeParams', '$http', 'user',
        function ($scope, $location, $routeParams, $http, user) {
            $scope.login = function () {
                user.login(function (data) {
                    if (!data) {
                        alert('Auth Error');
                    } else {
                        if (data.user.id) {
                            localStorage.setItem('user_id', data.user.id);
                            $location.path('/friends');
                            $scope.$apply();
                        }
                    }
                });
            };

            user.access(function (status) {
                if (status) {
                    $location.path('/friends');
                }
            });

        }]);