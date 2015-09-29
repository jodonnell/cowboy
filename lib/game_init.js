var GameInit = Class.extend({
    RIGHT_BOUND: 10,
    BOTTOM_BOUND: 20,

    init: function(hide) {
        this.createCanvas();
        if (hide)
            this.hide = true;
    },

    createCanvas: function() {
        this.width = 1200;
        this.height = 800;

        var canvas = '<canvas id="gameCanvas" width="' + this.width + '" height="' + this.height + '"></canvas>';
        $('body').append(canvas);
        $("#gameCanvas").css('position', 'absolute');
        $("#gameCanvas").css('top', '40px');
        $("#gameCanvas").css('left', '0px');
        if (this.hide)
            $("#gameCanvas").css('visibilty', 'hidden');
    },

    destroyCanvas: function() {
        $("#gameCanvas").remove();
    }
});
