var Game = Class.extend({
    init: function(gameInit) {
        this.gameInit = gameInit;
        this.cowboy = new Cowboy(40, this.gameInit.height - 200, new Control());

        this.collisionDetector = new CollisionDetector();

        var canvas = $("#gameCanvas");
        this.context = canvas[0].getContext('2d');

        this.onscreenSprites = new OnscreenSprites({players: [this.cowboy],
                                                    enemies: []
                                                   });
    },

    update: function () {
        var updateMethod = $.proxy(function (i, j) {
            this.onscreenSprites.sprites[i][j].update({collisionDetector: this.collisionDetector,
                                                       onscreenSprites: this.onscreenSprites});
        }, this);
        this._eachSprite(updateMethod);

        this._randomTumbleWeed();
        this._randomRobot();
    },

    draw: function () {
        this._drawBackground();

        var drawMethod = $.proxy(function (i, j) {
            this.onscreenSprites.sprites[i][j].draw(this.context);
        }, this);
        this._eachSprite(drawMethod);
    },

    _eachSprite: function (spriteAction) {
        var i, j, sprites;

        for (i = 0; i < this.onscreenSprites.sprites.length; i++) {
            sprites = this.onscreenSprites.sprites[i];
            for (j = 0; j < sprites.length; j++) {
                spriteAction(i, j);
            }
        }
    },

    _drawBackground: function () {
        this.context.fillStyle = 'olive';
        this.context.fillRect(0, 0, this.gameInit.width, this.gameInit.height);
    },

    _randomTumbleWeed: function () {
        if (_.random(1000) > 995) {
            var tumbleWeed = new TumbleWeed(1240, this.gameInit.height - 130);
            this.onscreenSprites.enemies.push(tumbleWeed);
        }
    },

    _randomRobot: function () {
        if (_.random(1000) > 995) {
            var robot = new Robot(1240, this.gameInit.height - 190);
            this.onscreenSprites.enemies.push(robot);
        }
    }

});
