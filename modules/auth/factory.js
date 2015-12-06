angular
    .module('AuthApp')
    .factory('user', ['$http', function ($http) {
        var vk = {
            data: {},
            appID: 5163061, // app id
            appPermissions: 16,

            init: function () {
                VK.init({apiId: vk.appID});
            },

            login: function (callback) {

                function authInfo(response) {
                    if (response.session) {
                        vk.data.user = response.session.user;
                        callback(vk.data);
                    } else {
                        return callback(false);
                    }
                }

                VK.Auth.login(authInfo, vk.appPermissions);
            },

            access: function (callback) {
                VK.Auth.getLoginStatus(function(response) {
                    if (response.session) {
                        callback(true);
                    } else {
                        callback(false);
                    }
                })
            },

            getFriendsList: function (callback) {
                VK.api('friends.get', {user_id: localStorage.getItem('user_id')}, function (data) {
                    var idString = '';
                    angular.forEach(data['response'], function (userId, num) {
                        idString += userId + ',';
                    });

                    VK.api("users.get", {uids: idString}, function(userData) {
                        callback(userData);
                    });
                });
            },

            logout: function (callback) {
                VK.Auth.logout(callback);
                this.data.user = {};
                localStorage.removeItem('user_id');
            }
        };

        vk.init();
        return vk;
    }]);