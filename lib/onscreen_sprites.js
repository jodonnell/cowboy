"use strict";

var OnscreenSprites = Class.extend({
    init: function (sprites) {
        if (!sprites) {
            sprites = {};
        }

        this.cowboy = sprites.players || [new Cowboy(100, 100)];
        this.enemies = sprites.enemies || [];

        this.sprites = [this.cowboy].concat([this.enemies]);

        var remove = function (element) {
            var index = this.indexOf(element);
            this.splice(index, 1);
        }

        this.cowboy.remove = remove;
        this.enemies.remove = remove;
    }
});
