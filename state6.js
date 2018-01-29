demo.state6 = function(){};
demo.state6.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#a6ff4d';
        console.log('state6');
        addChangeStateEventListeners();
    },
    update: function(){}
};