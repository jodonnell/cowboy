var CollisionDetection = Class.extend({
    init: function() {
    },

    isCollide: function(a, b) {
        return !(
            ((a.y + a.height) < (b.y)) ||
                (a.y > (b.y + b.height)) ||
                ((a.x + a.width) < b.x) ||
                (a.x > (b.x + b.width))
        );
    }
});
