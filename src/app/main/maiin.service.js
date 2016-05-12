'use strict';

angular.module('ballsbouncingapp').factory('MainService', [function () {
    var mainServiceFactory = {};

     var updateBall = function(ball) {
        ball.radians = ball.angle * Math.PI / 180;
        ball.xunits = Math.cos(ball.radians) * ball.speed;
        ball.yunits = Math.sin(ball.radians) * ball.speed;
    };

    function getMousePosition(canvas, evt) {
        var rectangle = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rectangle.left,
            y: evt.clientY - rectangle.top
        };
    }

    var generateBall = function(radius, speed, canvas, event) {
        if(event){
        var coordinates = getMousePosition(canvas,event);
        }
        
        var angle = Math.floor(Math.random() * 360);
        var radians = angle * Math.PI / 180;
        var xUnits = Math.cos(radians) * speed;
        var yUnits = Math.sin(radians) * speed;
        return {
            x: (coordinates !== undefined && coordinates !== null)? coordinates.x:(radius * 2 + (Math.floor(Math.random() * canvas.width) - radius * 2)),
            y: (coordinates !== undefined && coordinates !== null)? coordinates.y : radius * 2 + (Math.floor(Math.random() * canvas.height) - radius * 2),
            radius: radius,
            speed: speed,
            angle:angle,
            xunits: xUnits,
            yunits: yUnits
        };
    };

    mainServiceFactory.updateBall = updateBall;
    mainServiceFactory.generateBall = generateBall;

    return mainServiceFactory;
}
]);