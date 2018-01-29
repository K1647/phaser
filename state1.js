demo.state1 = function(){};
demo.state1.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state1');
        addChangeStateEventListeners();
    },
    update: function(){}
};