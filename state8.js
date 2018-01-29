demo.state8 = function(){};
demo.state8.prototype = {
    prelode: function(){},
    create: function(){
        game.stage.backgroundColor = '#66ffff';
        console.log('state8');
        addChangeStateEventListeners();
    },
    update: function(){}
};