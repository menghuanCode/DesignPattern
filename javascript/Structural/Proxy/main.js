// 虚拟代理实现图片预加载

// 代理模式的特点
// 代理对象和本体对象具有一致的接口，对使用者友好

let myImage = (function() {
    let imgNode = document.createElement("img");
    document.body.appendChild(imgNode);
    return {
        setSrc(src) {
            imgNode.src = src;
        }
    }
})();

let proxyImage = (function () {
    let img = new Image();
    img.onload = function () {
        myImage.setSrc(this.src);
    }
    return {
        setSrc(src) {
            img.src = src;
        }
    }
})()

proxyImage.setSrc('m.jpg');


// 缓存代理实现乘积计算
const mult = function () {
    let a = 1;
    for(let i = 0, l; l = arguments[i++];) {
        a = a * l;
    }
    return a;
}

const proxyMult = (function () {
    const cache = {};
    return function () {
        const tag = Array.prototype.join.call(arguments, ',');
        if (cache[tag]) {
            return cache[tag];
        }
        cache[tag] = mult.apply(this, arguments)

        return cache[tag]
    }
})()

proxyMult(1, 2, 3, 4);