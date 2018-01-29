demo.state5 = function(){};
demo.state5.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#cc6699';
        console.log('state5');
        addChangeStateEventListeners();
    },
    update: function(){}
};