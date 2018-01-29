demo.state7 = function(){};
demo.state7.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#99e6e6';
        console.log('state7');
        addChangeStateEventListeners();
    },
    update: function(){}
};