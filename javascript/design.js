// 单例模式
let singleton = function (fn) {
    let instance;
    return function () {
        return instance || (instance = fn.apply(this, arguments))
    }
};


// 建造者模式
class Builder {
    init() {
        let keys = Object.keys(this).filter(key => typeof key !== 'function');
        // setMethods
        keys.map(key => {
            const methodName = "set" + key.substring(0, 1) + key.substring(1);
            this[methodName] = value => {
                this[key] = value;
                return this;
            }
        })
    }

    build() {
        let keys = Object.keys(this).filter(key => typeof key !== 'function');
        return keys.reduce((returnValue, key) => {
            return {
                ...returnValue,
                key: this[key]
            }

        }, {})
    }
}


// 迭代器模式
// 内部建造者模式
var each = function (arr, callback) {
    for(var i = 0, len = arr.length; i < len; i++) {
        callback.call(arr[i], i, arr[i]);
    }
}


// 外部迭代器
var Iterator = function (obj) {
    let current = 0;
    let next = function () {
        return obj[current++];
    }

    let isDone = function() {
        return current >= obj.length;
    }

    let getCurrent = function () {
        return obj[current];
    }

    let length = obj.length;

    return {
        next,
        isDone,
        getCurrent,
        length
    }
}

// 发布、订阅模式
function EventEmitter() {
    this.super = [];
}

EventEmitter.prototype.on = function (eventName, ...fn) {
    if (!this.super[eventName]) {
        this.super[eventName] = [];
    }

    this.super[eventName].push(...fn);
}

EventEmitter.prototype.emit = function () {
    let eventName = Array.prototype.shift(arguments);
    if (!this.super[eventName]) {
        return;
    }
    this.super[eventName].map(item => item.apply(item, arguments));
}


// 组合模式、命名模式混搭
const MacroCommand = function () {
    return {
        list: [],
        add: function (task) {
            this.list.push(task)
        },
        excute: function () {
            this.list.map(task => task.excute());
        }
    }
}


// AOP 职责链路代码
Function.prototype.next = function (fn) {
    let self = this;
    return function () {
        let result = self.apply(self, arguments);
        if (result === 'next') {
            return fn.apply(self, arguments);
        }
    }
}


// APO 装饰器
Function.prototype.before = function (fn) {
    let self = this;
    return function () {
        fn.apply(this, arguments);
        return self.apply(self, arguments);
    }
}

Function.prototype.after = function (fn) {
    let self = this;
    return function () {
        self.apply(self, arguments);
        return fn.apply(this, arguments);
    }
}


