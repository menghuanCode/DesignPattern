// 单例模式


let singleton = function (fn) {
    let instance;
    return function () {
        return instance || (instance = fn.apply(fn, arguments))
    }
};


let a = {
    test: function () {
        return this;
    }
}


let  b = function() {
    return this;
}

let c = {
    test: function () {
    }
}


let aThis = singleton(a.test)();

c.test = aThis;

console.log(c.test());