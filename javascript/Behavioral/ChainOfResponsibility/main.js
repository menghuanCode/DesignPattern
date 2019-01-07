// 职责链模式


/*
场景 demo
场景: 某电商针对已付过定金的用户有优惠政策, 在正式购买后, 已经支付过 500 元定金的用户会收到 100 元的优惠券, 200 元定金的用户可以收到 50 元优惠券, 没有支付过定金的用户只能正常购买。
*/

// orderType: 表示订单类型, 1: 500 元定金用户；2: 200 元定金用户；3: 普通购买用户
// pay: 表示用户是否已经支付定金, true: 已支付；false: 未支付
// stock: 表示当前用于普通购买的手机库存数量, 已支付过定金的用户不受此限制



const order500 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('500 元定金预购, 得到 100 元优惠券')
    } else {
        return 'next'
    }
}

const order200 = function (orderType, pay, stock) {
    if (orderType === 1 && pay === true) {
        console.log('200 元定金预购, 得到 50 元优惠券')
    } else {
        return 'next'
    }
}

const orderCommon = function (orderType, pay, stock) {
    if (stock > 0) {
        console.log('普通购买, 无优惠券')
    } else {
        console.log('库存不够, 无法购买')
    }
}

// 链路
Function.prototype.after = function (fn) {
    let self = this;
    return function () {
        let result = self.apply(self, arguments);
        if (result === 'next') {
            return fn.apply(this, arguments)
        }
    }
}


const order = order500.after(order200).after(orderCommon);
order( 5, true, 500 ) // 普通购买, 无优惠券
