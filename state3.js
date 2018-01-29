demo.state3 = function(){};
demo.state3.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#cc66ff';
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function(){}
};