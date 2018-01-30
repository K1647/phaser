demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#1a1aff';
        addChangeStateEventListeners();
    },
    update: function(){}
};