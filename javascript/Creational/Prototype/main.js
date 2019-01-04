/**
 * 原型模式
 * 原型模式称为基于现有对象的模板通过克隆来创建对象的模式。
 * JavaScript中可以视为基于原型继承，在原型继承中我们可以创建对象作为其他对象的原型。
 * 原型对象本身被有效地作为构造函数创建每个对象的蓝图。
 *
 * ECMAScript 标准中定义的真正的原型继承，需要使用到Object.create。
 * 为了提醒自己，Object.create创建了一个具有指定原型的对象，并且还可以包含指定属性
 * Object.create(prototype.optionalDescriptorObjects)
 */

var beget = (function () {
    function F() {
        
    }

    return function (proto) {
        F.prototype = proto;
        return new F();
    }
})();