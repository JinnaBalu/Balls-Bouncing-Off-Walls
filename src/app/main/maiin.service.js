'use strict';

angular.module('ballsbouncingapp').factory('MainService', [function () {
    var mainServiceFactory = {};

     var updateBall = function(ball) {
        ball.radians = ball.angle * Math.PI / 180;
        ball.xunits = Math.cos(ball.radians) * ball.speed;
        ball.yunits = Math.sin(ball.radians) * ball.speed;
    };

    var generateBall = function(radius, speed, canvas) {
        var x = radius * 2 + (Math.floor(Math.random() * canvas.width) - radius * 2);
        var y = radius * 2 + (Math.floor(Math.random() * canvas.height) - radius * 2);
        var angle = Math.floor(Math.random() * 360);
        var radians = angle * Math.PI / 180;
        var xUnits = Math.cos(radians) * speed;
        var yUnits = Math.sin(radians) * speed;
        return {x: x, y: y, radius: radius, speed: speed, angle:angle, xunits: xUnits, yunits: yUnits};
    };

    function getRandomColor() {
        var letters = 'ABCDE'.split('');
        var color = '#';
        for (var i = 0; i < 3; i++) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }

    mainServiceFactory.updateBall = updateBall;
    mainServiceFactory.generateBall = generateBall;
    mainServiceFactory.getRandomColor = getRandomColor;

    return mainServiceFactory;
}
]);