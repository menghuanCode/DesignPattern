// 单例模式
let Singleton = function (fn) {
    let instance;
    return function () {
        return instance || (instance = fn.apply(this, arguments))
    }
}




