
"use strict";

var Images = Class.extend({
    init: function (callback) {
        this._loadImage("cowboy0", "cowboy-0.gif");
        this._loadImage("cowboy0", "cowboy-0.gif");
        this._loadImage("cowboy1", "cowboy-1.gif");
        this._loadImage("cowboy2", "cowboy-2.gif");
        this._loadImage("cowboy3", "cowboy-3.gif");
        this._loadImage("cowboy4", "cowboy-4.gif");
        this._loadImage("cowboy5", "cowboy-5.gif");
        this._loadImage("cowboy6", "cowboy-6.gif");
        this._loadImage("cowboy7", "cowboy-7.gif");
        this._loadImage("cowboy8", "cowboy-8.gif");
        this._loadImage("cowboy9", "cowboy-9.gif");
        this._loadImage("cowboy10", "cowboy-10.gif");
        this._loadImage("cowboy11", "cowboy-11.gif");
        this._loadImage("cowboy12", "cowboy-12.gif");
        this._loadImage("cowboy13", "cowboy-13.gif");
        this._loadImage("cowboy14", "cowboy-14.gif");
        this._loadImage("cowboy15", "cowboy-15.gif");
        this._loadImage("cowboy16", "cowboy-16.gif");
        this._loadImage("cowboy17", "cowboy-17.gif");
        this._loadImage("cowboy18", "cowboy-18.gif");
        this._loadImage("cowboy19", "cowboy-19.gif");
        this._loadImage("cowboy20", "cowboy-20.gif");
        this._loadImage("cowboy21", "cowboy-21.gif");
        this._loadImage("cowboy22", "cowboy-22.gif");
        this._loadImage("cowboy23", "cowboy-23.gif");
        this._loadImage("cowboy24", "cowboy-24.gif");
        
        
        this.cowboy25 = new Image();
        this.cowboy25.src = "images/cowboy-25.gif";
        this.cowboy25.onload = callback;
    },



    _loadImage: function (prop, imageFile) {
        this[prop] = new Image();
        this[prop].src = "images/" + imageFile;

    }
});
