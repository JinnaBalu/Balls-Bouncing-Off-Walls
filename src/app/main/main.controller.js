'use strict';

angular.module('ballsbouncingapp').controller('MainController', ['$scope', 'MainService', function($scope, MainService){

    $scope.ballsBounceCanvas = document.getElementById("ballsBounceCanvas");
    $scope.context = $scope.ballsBounceCanvas.getContext("2d");

    $scope.ballsBounceCanvas.addEventListener('click', function(event) {
        $scope.ballsList.push(MainService.generateBall($scope.radius, $scope.speed, $scope.ballsBounceCanvas));
    }, false);

    var init = function(){
        $scope.speed = 5;
        $scope.radius = 10;
        $scope.ballsList = new Array();
        $scope.ballsList.push(MainService.generateBall($scope.radius, $scope.speed, $scope.ballsBounceCanvas));
        setInterval(drawBallBouncingScreen, 33);
    };

    function drawBallBouncingScreen () {
        $scope.context.fillStyle = '#EEEEEE';
        $scope.context.fillRect(0, 0, $scope.ballsBounceCanvas.width, $scope.ballsBounceCanvas.height);
        $scope.context.strokeStyle = '#000000';
        $scope.context.strokeRect(1, 1, $scope.ballsBounceCanvas.width-2, $scope.ballsBounceCanvas.height-2);
        $scope.context.fillStyle = '#000000';

        var ball;

        for (var i = 0; i <$scope.ballsList.length; i++) {
            ball = $scope.ballsList[i];
            ball.x += ball.xunits;
            ball.y += ball.yunits;
            $scope.context.beginPath();
            $scope.context.arc(ball.x,ball.y,ball.radius,0,Math.PI*2,true);
            $scope.context.closePath();
            $scope.context.fill();

            if (ball.x > $scope.ballsBounceCanvas.width || ball.x < 0 ) {
                ball.angle = 180 - ball.angle;
                MainService.updateBall(ball);
            } else if (ball.y > $scope.ballsBounceCanvas.height || ball.y < 0) {
                ball.angle = 360 - ball.angle;
                MainService.updateBall(ball);
            }
        }
    }

    $scope.addBall = function(){
        $scope.ballsList.push(MainService.generateBall($scope.radius, $scope.speed, $scope.ballsBounceCanvas));
    };

    $scope.removeBall = function(){
        $scope.ballsList.pop();
    };

    init();
}]);