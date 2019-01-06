/**
 * 享元模式
 * 享元模式是一种优化性能的模式，本质是减少对象创建的个数。
 *
 * 以下情况可用
 * 1.大量相似的对象，占用大量的内存
 * 2.对象中大部分状态可以抽离为外部状态
 */

/**
 * demo
 * 某商家有 50 种男款内衣和 50 种款女款内衣, 要展示它们
 * 方案一: 造 50 个塑料男模和 50 个塑料女模, 让他们穿上展示, 代码如下:
 */
// const Model = function (gender, underwear) {
//     this.gender = gender;
//     this.underwear = underwear;
// }
//
// Model.prototype.takephoto = function () {
//     console.log(`${this.gender}穿着${this.underwear}`);
// }
//
// for(let i = 1; i <= 50; i++) {
//     const maleModel = new Model('male',`第${i}款衣服`);
//     maleModel.takephoto();
// }
//
//
// for(let i = 1; i <= 50; i++) {
//     const femaleModel = new Model('female',`第${i}款衣服`);
//     femaleModel.takephoto();
// }

/**
 * 方案二: 造 1 个塑料男模特 1 个塑料女模特, 分别试穿 50 款内衣
 */

// const Model = function (gender) {
//     this.gender = gender;
// }
//
// Model.prototype.takephone = function () {
//     console.log(`${this.gender}穿着${this.underwear}`);
// }
//
// const maleModel = new Model('male');
// const femaleModel = new Model('female')
//
// for(let i = 1; i <= 50; i++) {
//     maleModel.underwear = `第${i}件衣服`;
//     maleModel.takephone();
// }
//
// for(let i = 1; i <= 50; i++) {
//     femaleModel.underwear = `第${i}件衣服`;
//     femaleModel.takephone();
// }

/**
 *  当然在方案二的 demo 中, 还可以进一步改善:
 *  一开始就通过构造函数显示地创建实例, 可用工场模式将其升级成可控生成
 *  在实例上手动添加 underwear 不是很优雅, 可以在外部单独在写个 manager 函数
 */

const Model = function (gender) {
    this.gender = gender;
}

Model.prototype.takephoto = function () {
    console.log(`${this.gender}穿着${this.underwear}`);
}

const modelFactory = (function () {
    const modelGender = [];
    return {
        createModel: function (gender) {
            return modelGender[gender] || (modelGender[gender] = new Model(gender));
        }
    }
})();

const modelManager = (function () {
    const modelObj = {};
    return {
        add: function (gender, i) {
            modelObj[i] = {
                underwear: `第${i}件衣服`
            }
            return modelFactory.createModel(gender);
        },
        copy: function (model, i) {
            model.underwear = modelObj[i].underwear;
        }
    }
})()

for(let i = 1; i <= 50; i++) {
    const maleModel = modelManager.add('male', i);
    modelManager.copy(maleModel, i);
    maleModel.takephoto();
}

for(let i = 1; i <= 50; i++) {
    const femaleModel = modelManager.add('male', i);
    modelManager.copy(femaleModel, i);
    femaleModel.takephoto();
}

