# 抽象工厂模式

抽象工厂模式( Abstract Factory Pattern ) 是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。
  
 在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显示指定他们的类。每个生产的工厂都能按照工厂模式提供对象。
 
 
 **注意：在JavaScript中是没有接口(Interface)这个概念的，我们可以模拟实现。在犀牛书"JavaScript的设计模式" 中有介绍接口的实现方法，大家上网搜一搜就能找到。**
   
 接口的作用：**实现接口的类必须实现接口中定义的方法，不然会报错**。   
 
 **注意：在JavaScript中是没有抽象(Abstract)这个概念的，可以自己模拟实现，大家上网搜一搜就能找到。**
 
 抽象的作用：**和接口很像，不过里面可以定义不是必须实现的方法和属性**
 
 我们这里为了不增加代码的复杂性，就不模拟接口和抽象类了，不会影响效果。大家知道就好。
 
 
## 实现
~~我们将创建 Shape 和 Color 接口和实现这些接口的实体类~~。下一步创建~~抽象~~工厂类 AbstractFactory。接着定义工厂类 ShapeFactory 和 ColorFactory，这两个工厂类都是扩展了 AbstractFactory。然后创建一个工厂创造器/生成器 FactoryProducer。  
Creational.AbstractFactory，我们使用 FactoryProducer 来获取 AbstractFactory 对象。它将向 AbstractFactory 传递形状信息 Shape( CIRCLE / RECTANGLE / SQUARE )，以便获取它所需对象的类型。同时他还向 AbstractFactory 传递颜色信息 Color( RED / GREEN / BLUE )，以便获取它所需的类型。
 

 ### 步骤 1
创建Shpe的实体类。
```javascript
// Rectangle.js
class Rectangle{
    draw() {
        console.log("Inside Rectangle::draw() method.");
    }
}

// Square.js
class Square{
    draw() {
        console.log("Inside Square::draw() method.");
    }
}

// Circle.js
class Circle{
    draw() {
        console.log("Inside Circle::draw() method.");
    }
}
```

###步骤3
创建Color的实体类。
```javascript
// Red.js
class Red{
    fill() {
        console.log("Inside Red::fill() method.");
    }
}

// Green.js
class Green{
    fill() {
        console.log("Inside Green::fill() method.");
    }
}

// Blue.js
class Blue{
    fill() {
        console.log("Inside Blue::fill() method.");
    }
}
```

###步骤 4
创建抽象的工厂类来获取产品。

```js
// AbstractFactory.js
class AbstractFactory {
    getColor(color) {
        return null;
    }
    getShape(shape) {
        return null;
    }
}
```

### 步骤5
创建扩展了 AbstractFactory 的工厂类，基于给定的信息生成实体类的对象。

```js
// ShapeFactory.js
class ShapeFactory extends AbstractFactory {

    getShape(shapeType) {
        if(shapeType == null){
            return null;
        }
        if(shapeType === "CIRCLE"){
            return new Circle();
        } else if(shapeType === "RECTANGLE"){
            return new Rectangle();
        } else if(shapeType === "SQUARE"){
            return new Square();
        }
        return null;
    }

}

// ColorFactory.js
class ColorFactory extends AbstractFactory {

    getColor(color) {
        if(color == null){
            return null;
        }
        if( color === "RED"){
            return new Red();
        } else if( color === "GREEN" ){
            return new Green();
        } else if( color === "BLUE"){
            return new Blue();
        }
        return null;
    }
    
}

```

### 步骤 6
创建一个工厂创造器/生成器类，通过传递形状或颜色信息来获取工厂。

```js
class FactoryProducer {
    static getFactory(choice) {
        if(choice === "SHAPE"){
            return new ShapeFactory();
        } else if(choice === "COLOR"){
            return new ColorFactory();
        }
        return null;
    }
}
````    



### 步骤 7
使用 FactoryProducer 来获取 工厂，通过传递类型信息来获取实体类的对象。

```js
// main.js
class Main {
    constructor() {
        //获取形状工厂
        let shapeFactory = FactoryProducer.getFactory("SHAPE");
        //获取形状为 Circle 的对象
        let circle = shapeFactory.getShape("CIRCLE");
        //调用 Circle 的 draw 方法
        circle.draw();
        //获取形状为 Square 的对象
        let square = shapeFactory.getShape("SQUARE");
        //调用 Square 的 draw 方法
        square.draw();

        //获取颜色工厂
        let fillFactory = FactoryProducer.getFactory("COLOR");
        //获取颜色为 Red 的对象
        let red = fillFactory.getColor("RED");
        //调用 Red 的 fill 方法
        red.fill();
        //获取颜色为 Green 的对象
        let green = fillFactory.getColor("GREEN");
        //调用 Green 的 fill 方法
        green.fill();
        //获取颜色为 Blue 的对象
        let blue = fillFactory.getColor("BLUE");
        //调用 Blue 的 fill 方法
        blue.fill();
    }
}

let mian = new Main();
```

### 步骤 8
调用
```html
<!--工厂生产商-->
<script src="FactoryProducer.js"></script>
<!--抽象工厂（大厂）-->
<script src="AbstractFactory.js"></script>
<!--开辟工厂（小厂）-->
<script src="ShapeFactory.js"></script>
<script src="ColorFactory.js"></script>
<!--厂的商品-->
<script src="Rectangle.js"></script>
<script src="Square.js"></script>
<script src="Circle.js"></script>
<script src="Red.js"></script>
<script src="Green.js"></script>
<script src="Blue.js"></script>
<!--调用-->
<script src="main.js"></script>
```

