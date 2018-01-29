demo.state4 = function(){};
demo.state4.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#ff99dd';
        console.log('state4');
        addChangeStateEventListeners();
    },
    update: function(){}
};