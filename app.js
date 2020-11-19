(function() {
'use strict';

angular.module('app', [])

.controller('AppController', function ($scope) {
    $scope.product = "";
    $scope.result = "";

    $scope.clicked = function(){
        var arr_a = "," + $scope.product + ",";
        var arr_b = arr_a.split(/,[\s,]*/);
        
        arr_b.pop();
        arr_b.shift();

        if(arr_b.length == 0){
            $scope.result = "Будь ласка, введіть дані!";
        }
        else if(arr_b.length <= 3){
            $scope.result = "На здоров'я!";
        }
        else{
            $scope.result = "Це забагато!";
        }
    };
});
})();