var app = angular.module("testoneApp", []);
app.controller("peopleController", function ($scope, $http) {
    var limitStep = 15;
    $scope.limit = limitStep;
    $scope.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    $scope.setActiveLetter = function (letter) {
        $scope.activeLetter = letter;
    };

    $http.get('json/names.json').success(function (data, status, headers, config) {
        $scope.people = data.names;
    }).error(function (data, status, headers, config) {

    });

    $scope.incrementLimit = function () {
        $scope.limit += limitStep;
        console.log($scope.limit)
    };
});

app.filter('firstLetter', function () {
    return function (input, key, letter) {
        
        if (letter !== undefined) {
            input = input || [];
            var out = [];
            input.forEach(function (item) {
                if (item[key][0].toLowerCase() == letter.toLowerCase()) {
                    out.push(item);
                }
            });
            return out;
        }
        else{
            return input;
        }
    };
});