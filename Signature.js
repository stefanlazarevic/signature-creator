/**
 * @author Stefan Lazarevic
 * @version 0.1.0
 */
(function IIFE(global) {

    const _defaultOptions = {
        width: 300,
        height: 150,
        text: 'Signature Sample',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        fontFamily: 'Arial',
        fontSize: 24,
    };

    function Signature(canvas, options) {
        return new Signature.init(canvas, options);
    }

    /**
     * Initialize new Signature canvas object.
     *
     * @param {HTMLCanvasElement} canvas Instance of canvas element.
     * @param {object} options Object containing signature options.
     * @param {boolean} initRender Flag that determine if signature has to be render initially.
     */
    Signature.init = function(canvas, options, initRender = false) {
        this.canvas = canvas instanceof HTMLCanvasElement ? canvas : document.createElement('canvas');
        this.context = this.canvas.getContext('2d');

        this.text = options && options.text ? options.text : _defaultOptions.text;
        this.backgroundColor = options && options.backgroundColor ? options.backgroundColor : _defaultOptions.backgroundColor;
        this.textColor = options && options.textColor ? options.textColor : _defaultOptions.textColor;
        this.fontFamily = options && options.fontFamily ? options.fontFamily : _defaultOptions.fontFamily;
        this.fontSize = options && options.fontSize ? +options.fontSize : _defaultOptions.fontSize;

        if (initRender) {
            this.render();
        }

        return this;
    }

    /**
     * Signature Module API.
     */
    Signature.init.prototype = {
        // Getters.
        getCanvas: function() {
            return this.canvas;
        },
        getWidth: function() {
            return this.canvas.width;
        },
        getHeight: function() {
            return this.canvas.height;
        },
        getText: function() {
            return this.text;
        },
        getBackgroundColor: function() {
            return this.backgroundColor;
        },
        getTextColor: function() {
            return this.textColor;
        },
        getFontFamily: function() {
            return this.fontFamily;
        },
        getTextWidth: function() {
            this.context.font = `${this.fontSize}px ${this.fontFamily}`;
            return Math.ceil(this.context.measureText(this.text).width);
        },

        // Setters.
        setWidth: function(width) {
            this.canvas.width = width || _defaultOptions.width;
            return this;
        },
        setHeight: function(height) {
            this.canvas.height = height || _defaultOptions.height;
            return this;
        },
        setText: function(text) {
            this.text = text || _defaultOptions.text;
            return this;
        },
        setBackgroundColor: function(backgroundColor) {
            this.backgroundColor = backgroundColor || _defaultOptions.backgroundColor;
            return this;
        },
        setTextColor: function(textColor) {
            this.textColor = textColor || _defaultOptions.textColor;
            return this;
        },
        setFontFamily: function(fontFamily) {
            this.fontFamily = fontFamily || _defaultOptions.fontFamily;
            return this;
        },
        setFontSize: function(fontSize) {
            this.fontSize = +fontSize || _defaultOptions.fontSize;
            return this;
        },

        // Utility.
        clearCanvas: function () {
            this.context.clearRect(0, 0, this.getWidth(), this.getHeight());
            return this;
        },
        render: function () {
            this.clearCanvas().setWidth(this.getTextWidth()).setHeight(this.fontSize * 2);
            this.context.fillStyle = this.backgroundColor;
            this.context.fillRect(0, 0, this.getWidth(), this.getHeight());
            this.context.font = `${this.fontSize}px ${this.fontFamily}`;
            this.context.fillStyle = this.textColor;
            this.context.fillText(this.text, 0, this.getHeight() - this.getHeight() / 3);
            return this;
        },
        downloadAs: function(type = 'png') {
            const downloadLink = document.createElement('a');
            downloadLink.href = this.canvas.toDataURL(`image/${type}`);
            downloadLink.download = `signature.${type}`;
            downloadLink.click();
        }
    };

    Signature.prototype = Signature.init.prototype;

    global.Signature = Signature;

})(window);
