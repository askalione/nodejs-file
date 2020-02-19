"use strict";

var methods = {
    getName: function (path) {
        return path.split('\\').pop().split('/').pop();
    },
    getInfo: function (path) {
        var name = this.getName(path);
        var parts = name.split('.');
        var extension = parts.length > 1 ? '.' + parts.pop() : undefined;
        return {
            name: parts.join('.'),
            extension: extension
        };
    },
    getNameWithoutExtension: function (path) {
        var info = this.getInfo(path);
        return info.name;
    }
}

module.exports = methods;