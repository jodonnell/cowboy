var Game = Class.extend({
    init: function(gameInit) {
        this.gameInit = gameInit;
        var controller = new Control();
        this.cowboy = new Cowboy(40, this.gameInit.height - 200, controller);

        this.sprites = [this.cowboy];
        this.enemies = [];
        this.collisionDetector = new CollisionDetector();

        var canvas = $("#gameCanvas");
        this.context = canvas[0].getContext('2d');


        this.onscreenSprites = new OnscreenSprites({players: [this.cowboy],
                                                    enemies: []
                                                   });

        $(document).on('fire', $.proxy(function () {
            var y = this.cowboy.y + 30;

            var hitEnemies = _.filter(this.onscreenSprites.enemies, function (enemy) {
                if (this.collisionDetector.lineWithRectangle(enemy, [this.cowboy.x + this.cowboy.width + 15, y], [1850, y])) {
                    return true;
                }
                return false;
            }, this);

            var deadEnemy = _.min(hitEnemies, function (enemy) {
				        return enemy.x;
            });

            deadEnemy.dead = true;
        }, this));

    },

    update: function () {
        var updateMethod = $.proxy(function (i, j) {
            this.onscreenSprites.sprites[i][j].update({collisionDetector: this.collisionDetector, onscreenSprites: this.onscreenSprites});
        }, this);
        this._eachSprite(updateMethod);

        if (_.random(100) > 99) {
            var tumbleWeed = new TumbleWeed(1240, this.gameInit.height - 170);
            this.onscreenSprites.enemies.push(tumbleWeed);
        }

        var yum = _.filter(this.onscreenSprites.enemies, function (enemy) {
            return enemy.dead == true;
        }, this);

        _.each(yum, function (y) {
				    this.onscreenSprites.enemies.remove(y);
        }, this)

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

    draw: function () {
        this._drawBackground();

        var drawMethod = $.proxy(function (i, j) {
            this.onscreenSprites.sprites[i][j].draw(this.context);
        }, this);
        this._eachSprite(drawMethod);
    },

    _drawBackground: function () {
        this.context.fillStyle = 'olive';
        this.context.fillRect(0, 0, this.gameInit.width, this.gameInit.height);
    }
});
