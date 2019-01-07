/**
 * 装饰器的神韵
 * 动态地给函数赋值
 */


// AOP 装饰函数

// 前置代码
Function.prototype.before = function (fn) {
    let self = this;
    return function () {
        fn.apply(this, arguments);
        return self.apply(self, arguments);
    }
}
// 后置代码
Function.prototype.after = function (fn) {
    let self = this;
    return function () {
        self.apply(self, arguments);
        return fn.apply(this, arguments);
    }
}





const wear1 = function() {
    console.log('穿上第一件衣服')
}

const wear2 = function() {
    console.log('穿上第二件衣服')
}

const wear3 = function() {
    console.log('穿上第三件衣服')
}


const wear = wear1.after(wear2).after(wear3);
wear();
