// 工厂模式
var factory = function () {
    
}

// 懒惰单例模式
var singleton = function(fn) {
    var instance;
    return function () {
        return instance || (instance = fn.apply(this, arguments));
    }
}
