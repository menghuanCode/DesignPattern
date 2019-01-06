// 迭代模式
// 顺序访问一个聚合对象的中的元素，不需要知道对该对象的内部实现。

// 内部迭代器
// each
var each = function (arr, callback) {
    var result;
    for(var i = 0, len = arr.length; i < len; i++) {
         result = callback.call(arr[i], i, arr[i]);
        if (result === false) {
            break;
        }
    }
}


each([1, 2, 3, 4, 'a'], function (i, el) {
    console.log('index:', i);
    console.log('item:, el');
})

var compare = function (Iterator1, Iterator2) {
    if (Iterator1.length !== Iterator2.length) {
        return false;
    }
    while (!Iterator1.isDone() && !Iterator2.isDone()) {
        if (Iterator1.next() !== Iterator2.next()) {
            return false;
        }
    }
    return true;
}

// 外部迭代器
var Iterator = function (obj) {
    var current = 0;
    var next = function () {
        return obj[current++];
    }

    var isDone = function () {
        return current >= obj.length;
    }

    var getCurrent = function () {
        return obj[current]
    }

    var length = obj.length;

    return {
        next,
        length,
        isDone,
        getCurrent
    }
}

var Iterator1 = Iterator([1, 2, 3, 4, 5]);
var Iterator2 = Iterator([1, 2, 2, 4, 5]);

compare(Iterator1, Iterator2);
