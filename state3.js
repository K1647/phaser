demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#cc66ff';
        addChangeStateEventListeners();
    },
    update: function(){}
};