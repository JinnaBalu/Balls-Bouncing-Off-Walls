'use strict';

angular.module('ballsbouncingapp').controller('MainController', ['$scope', 'MainService', function($scope, MainService){

    $scope.ballsBounceCanvas = document.getElementById("ballsBounceCanvas");
    var init = function(){
        $scope.context='';
        $scope.isCanvasSupported = false;
        if ($scope.ballsBounceCanvas.getContext){
            $scope.isCanvasSupported = true;
            $scope.context = $scope.ballsBounceCanvas.getContext("2d");
        }
        $scope.speed = 5;
        $scope.radius = 50;
        $scope.ballsList = [];
        $scope.play = true;
        $scope.playPauseValue = 'Pause';
        $scope.ballWallCollideCount = 0;
        $scope.ballsList.push(MainService.generateBall($scope.radius * Math.random(), $scope.speed, $scope.ballsBounceCanvas, false));
        setInterval(drawBallBouncingScreen, 100/3);
    };

    var updateBall = function(speed){
        var ball;
        for (var i = 0; i <$scope.ballsList.length; i++) {
            ball = $scope.ballsList[i];
            ball.x += ball.xunits;
            ball.y += ball.yunits;
            ball.speed = speed;
            $scope.context.beginPath();
            $scope.context.arc(ball.x,ball.y,ball.radius,MainService.degree(0),MainService.degree(360),true);
            $scope.context.fillStyle = ball.color;
            $scope.context.closePath();
            $scope.context.fill();
            if (ball.x > $scope.ballsBounceCanvas.width - ball.radius  || ball.x < ball.radius ) {
                ball.angle = 180 - ball.angle;
                MainService.updateBall(ball);
            } else if (ball.y > $scope.ballsBounceCanvas.height - ball.radius || ball.y < ball.radius) {
                ball.angle = 360 - ball.angle;
                MainService.updateBall(ball);
            }
        }
    };

    function drawBallBouncingScreen () {
        if($scope.play){
            if($scope.isCanvasSupported){
                $scope.context.fillStyle = '#EEEEEE';
                $scope.context.fillRect(0, 0, $scope.ballsBounceCanvas.width, $scope.ballsBounceCanvas.height);
                $scope.context.strokeStyle = '#000000';
                $scope.context.strokeRect(1, 1, $scope.ballsBounceCanvas.width-2, $scope.ballsBounceCanvas.height-2);
                $scope.context.fillStyle = '#000000';

                updateBall($scope.speed);
            }else{
                alert('Canvas is not supported in your browser');
            }
        }
    }
    $scope.addBall = function(){
        $scope.ballsList.push(MainService.generateBall($scope.radius * Math.random(), $scope.speed, $scope.ballsBounceCanvas, false));
    };

    $scope.setSpeed = function(speed){
        updateBall(speed);
    };

    $scope.removeBall = function(){
        $scope.ballsList.pop();
    };

    $scope.playPausePress = function(play) {
        if(play){
            $scope.play = false;
            $scope.playPauseValue = 'Play';
        }else{
            $scope.play = true;
            $scope.playPauseValue = 'Pause';
        }
    };

    init();

    $scope.ballsBounceCanvas.addEventListener('click', function(event) {
        $scope.ballsList.push(MainService.generateBall($scope.radius * Math.random(), $scope.speed, $scope.ballsBounceCanvas, event));
    }, false);
}]);