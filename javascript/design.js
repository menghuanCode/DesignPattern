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