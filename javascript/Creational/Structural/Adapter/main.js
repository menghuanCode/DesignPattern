// 参数的适配

class SDK {
    phoneStatus(config) {
        let defaultConfig = {
            brand: null,
            os: null,
            carrier: 'china-mobile',
            language: 'zh',
            network: 'wifi'
        }

        // 参数适配
        for(let i in config) {
            defaultConfig[i] = config[i] || defaultConfig[i];
        }

        // dosomething......
    }
}


// 数据的适配
let data = [
    {
        "day": "周一",
        "uv": 6300
    },
    {
        "day": "周二",
        "uv": 7100
    },  {
        "day": "周三",
        "uv": 4300
    },  {
        "day": "周四",
        "uv": 3300
    },  {
        "day": "周五",
        "uv": 8300
    },  {
        "day": "周六",
        "uv": 9300
    }, {
        "day": "周日",
        "uv": 11300
    }
]

// x轴适配
function echarXAxisAdapater(res) {
    return res.map(item => item.day);
}

// 坐标点适配器
function echartDataAdapater(res) {
    return res.map(item => res.uv);
}