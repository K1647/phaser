demo.state9 = function(){};
demo.state9.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#ffcc66';
        console.log('state9');
        addChangeStateEventListeners();
    },
    update: function(){}
};