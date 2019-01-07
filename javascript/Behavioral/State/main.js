/**
 * 装饰器模式
 */

// demo
// weakLight、strongLight、offLight
// currentState


let Light = function () {
    this.weakLight = new weakLight(this);
    this.strongLight = new strongLight(this);
    this.offLight = new offLight(this);
    this.currentState = this.offLight;
}

Light.prototype.init = function() {
    const btn = document.createElement("button");
    btn.innerHTML = "按钮";
    document.body.appendChild(btn);
    btn.addEventListener("click", () => {
        this.currentState.press();
    })

}

Light.prototype.setState = function (state) {
    this.currentState = state;
}


const weakLight = function (light) {
    console.log(this);
    this.light = light;
}

weakLight.prototype.press = function () {
    console.log("发出弱光")
    this.light.setState(this.light.strongLight);
}

const strongLight = function (light) {
    this.light = light;
}

strongLight.prototype.press = function () {
    console.log("发出强光")
    this.light.setState(this.light.offLight);
}

const offLight = function (light) {
    this.light = light;
}

offLight.prototype.press = function () {
    console.log("关灯")
    this.light.setState(this.light.weakLight);
}

let light = new Light();
light.init();
