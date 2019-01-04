/**
 * 建造者模式（Builder）是将一个复杂对象的构建层与其表示层相互分离，同样的构建过程可采用不同的表示。
 *
 * 建造者模式的特点是分步构建一个复杂的对象，可以用不同组合或顺序建造出不同意义的对象，通常使用者并不需要知道建造的细节，通常使用链式调用来进行建造过程，最后调用 build 方法来生成最终的对象。
 *
 * 和工厂模式的区别：
 *
 * 工厂虽然创建了对象，但是怎么创建无所谓
 * 工厂模式关注的是创建的结果
 *
 * 建造者模式不仅得到了结果
 * 同时也参与了创建的具体过程，适合用于创建一个复杂的复合函数
 *
 */


// 基类
class BaseBuilder {
    init() {


        const keys = Object.keys(this).filter(key => typeof this[key] !== 'function');

        // getMethods
        keys.map((key) => {
            const method = `get${key.substring(0, 1).toUpperCase()}${key.substring(1)}`;
            this[method] = () => this[key];
        })

        // setMethods
        keys.map((key) => {
            const method = `set${key.substring(0, 1).toUpperCase()}${key.substring(1)}`;
            this[method] = value => {
                this[key] = value;
                return this;
            }
        })

    }

    build() {
        const keys = Object.keys(this).filter(key => typeof this[key] !== 'function');
        return keys.reduce((returnValue, key, currentIndex, array) => {
            return {
                ...returnValue,
                [key]: this[key]
            }
        }, {})
    }
}

/**
 * 书籍建造者
 * 必填信息：书名，作者，价格，分类
 */
class BookBuilder extends BaseBuilder {
    constructor() {
        super();

        this.name = '';
        this.author = '';
        this.price = 0;
        this.category = '';

        super.init();
    }
}

/**
 * 印刷厂建造者类
 *
 */
class printHouseBuilder extends BaseBuilder {
    constructor() {
        super();

        this.name = '';
        this.location = '';
        this.quality = '';

        super.init();
    }
}


// 调用建造者类
const book = new BookBuilder()
    .setName("搞笑")
    .setAuthor("m")
    .setPrice(0)
    .setCategory("笑")
    .build();

const printHouse = new printHouseBuilder()
    .setName("大大")
    .setLocation("天神区")
    .setQuality('S')
    .build();
