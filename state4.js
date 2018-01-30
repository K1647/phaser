demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff99dd';
        addChangeStateEventListeners();
    },
    update: function(){}
};