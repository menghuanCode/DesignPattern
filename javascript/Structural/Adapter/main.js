// 1. 库的适配
let _hmt = {
    push: (arr) => {
        const [eventName, attrName, value] = [...arr.splice(2)];

        let attrObj = {
            [attrName]: value
        }

        console.log(attrObj);

    }
}

_hmt.push(['_trackEvent', 'web', 'page_enter', 'position', 'index.html']);


//  2. 参数的适配

/**
 * {
 *   brand: String,
 *   os: String,
 *   carrier:? String,
 *   language:? String,
 *   network:? String
 * }
 */
class SDK {
    phoneStatus(brand, os, carrier, language, network) {
        // dosomething......
        let defaultConfig = {
            brand: null,
            os: null,
            carrier: 'china-mobile',
            language: 'zh',
            network: 'wifi'
        }

        // 参数适配

    }
}

function pay({
    price,
    goodsId
}) {
    return new Promise((resolve, reject) => {
        const config = {};
    })
}