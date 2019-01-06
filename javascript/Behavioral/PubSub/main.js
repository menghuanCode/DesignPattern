// 发布订阅模式
;(function () {

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
        let eventName = Array.prototype.shift.call(arguments);
        if (!this.super[eventName]) {
            return;
        }

        console.log(this.super[eventName]);
        this.super[eventName].map(item => item.apply(item, arguments));
    }

    let ev = new EventEmitter();
    ev.on('click', function (a) {
        console.log(a);
    }, function () {
        console.log(2);
    })

    ev.emit('click', 1, 2)
})();