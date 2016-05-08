'use strict';

angular.module('ballsbouncingapp').controller('MainController', ['$scope', function($scope){

    var init = function(){
        $scope.speed = 5;
        $scope.ballsList = new Array();
        $scope.x;
        $scope.y;
        $scope.angle;
        $scope.radius =10;
        $scope.radians;
        $scope.xUnits;
        $scope.yUnits;
        canvasRun();
    };

    var updateBall = function(ball) {
        ball.radians = ball.angle * Math.PI / 180;
        ball.xunits = Math.cos(ball.radians) * ball.speed;
        ball.yunits = Math.sin(ball.radians) * ball.speed;
    };

    var elem = document.getElementById("ballsBounceCanvas");

    elem.addEventListener('click', function(event) {
        generateBall();
    }, false);

    function drawBallBouncingScreen () {
        $scope.context.fillStyle = '#EEEEEE';
        $scope.context.fillRect(0, 0, $scope.ballsBounceCanvas.width, $scope.ballsBounceCanvas.height);
        $scope.context.strokeStyle = '#000000';
        $scope.context.strokeRect(1, 1, $scope.ballsBounceCanvas.width-2, $scope.ballsBounceCanvas.height-2);
        $scope.context.fillStyle = "#000000";
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
                updateBall(ball);
            } else if (ball.y > $scope.ballsBounceCanvas.height || ball.y < 0) {
                ball.angle = 360 - ball.angle;
                updateBall(ball);
            }
        }
    }

    var generateBall = function() {
        $scope.x = $scope.radius * 2 + (Math.floor(Math.random() * $scope.ballsBounceCanvas.width) - $scope.radius * 2);
        $scope.y = $scope.radius * 2 + (Math.floor(Math.random() * $scope.ballsBounceCanvas.height) - $scope.radius * 2);
        $scope.angle = Math.floor(Math.random() * 360);
        $scope.radians = $scope.angle * Math.PI / 180;
        $scope.xUnits = Math.cos($scope.radians) * $scope.speed;
        $scope.yUnits = Math.sin($scope.radians) * $scope.speed;
        var newBall = {x: $scope.x, y: $scope.y, radius: $scope.radius, speed: $scope.speed, angle: $scope.angle, xunits: $scope.xUnits, yunits: $scope.yUnits};
        $scope.ballsList.push(newBall);
    };

    var canvasRun = function() {
        $scope.ballsBounceCanvas = document.getElementById("ballsBounceCanvas");
        $scope.context = $scope.ballsBounceCanvas.getContext("2d");
        generateBall();
        setInterval(drawBallBouncingScreen, 33);
    };

    $scope.addBall = function(){
        generateBall();
    };

    $scope.removeBall = function(){
        $scope.ballsList.pop();
    };

    init();
}]);