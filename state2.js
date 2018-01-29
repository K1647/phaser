demo.state2 = function(){};
demo.state2.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#1a1aff';
        console.log('state2');
        addChangeStateEventListeners();
    },
    update: function(){}
};