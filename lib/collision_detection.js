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
    },

    lineWithRectangle: function (rect, p1, p2) {
        var x1 = p1[0];
        var y1 = p1[1];
        var x2 = p2[0];
        var y2 = p2[1];

        function linePosition(point) {
            var x = point[0];
            var y = point[1];
            return (y2 - y1) * x + (x1 - x2) * y + (x2 * y1 - x1 * y2);
        }

        var bottom = rect.y + rect.height;
        var right = rect.x + rect.width;
        var relPoses = [[rect.x, rect.y],
                        [rect.x, bottom],
                        [right, rect.y],
                        [right, bottom]
                       ].map(linePosition);

        var noNegative = true;
        var noPositive = true;
        var noZero = true;
        relPoses.forEach(function(relPos) {
            if (relPos > 0) {
                noPositive = false;
            } else if (relPos < 0) {
                noNegative = false;
            } else if (relPos === 0) {
                noZero = false;
            }
        }, this);

        if ( (noNegative || noPositive) && noZero) {
            return false;
        }
        return !((x1 > right && x2 > right) ||
                 (x1 < rect.x && x2 < rect.x) ||
                 (y1 < rect.y && y2 < rect.y) ||
                 (y1 > bottom && y2 > bottom)
                );
        return true;
    }
});
