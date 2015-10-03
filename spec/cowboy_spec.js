"use strict";

describe("Cowboy", function () {
    var cowboy;

    beforeEach(function () {
        cowboy = new Cowboy(100, 100);
    });

    it("has six bullets", function () {
        expect(cowboy.bullets()).toBe(6);
    });

    it("loses a bullet after shooting", function () {
        cowboy.beginShoot();
        expect(cowboy.bullets()).toBe(5);
    });

    it("cannot shoot when no bullets", function () {
        cowboy._bullets = 0;
        expect(cowboy.canShoot()).toBe(false);
    });

});
