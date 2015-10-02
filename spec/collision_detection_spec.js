"use strict";

describe("CollisionDetector", function () {
    var cowboy, collisionDetector;

    beforeEach(function () {
        cowboy = new Cowboy(100, 100);
        collisionDetector = new CollisionDetection();
    });

    it("should be able to detect rect on rect", function () {
        var cowboy2 = new Cowboy(101, 101);
        expect(collisionDetector.isCollide(cowboy, cowboy2)).toBe(true);
    });

    it("should be able to detect rect on line", function () {
        expect(collisionDetector.lineWithRectangle(cowboy, [0, 150], [850, 150])).toBe(true);
        expect(collisionDetector.lineWithRectangle(cowboy, [0,0], [1000, 1000])).toBe(true);
        expect(collisionDetector.lineWithRectangle(cowboy, [0, 0], [1000, 1])).toBe(false);
    });
});
