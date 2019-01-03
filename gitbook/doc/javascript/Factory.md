# 工厂模式

工厂模式（Factory Pattern）是 面向对象 中最常用的设计模式之一。这种类型的设计模式属于创建型模式，他提供了一种创建对象的最佳方式。在工厂模式中，我们创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。

**注意：在JavaScript中是没有接口(Interface)这个概念的，我们可以模拟实现。在犀牛书"JavaScript的设计模式" 中有介绍接口的实现方法，大家上网搜一搜就能找到。**
  
接口的作用：**实现接口的类必须实现接口中定义的方法，不然会报错**。  
我们这里为了不增加代码的复杂性，就不模拟接口了，不会影响效果。大家知道就好。 

## 实现
~~我们将创建一个 Shape 接口~~和实现 Shape 接口的实体类。下一步是定义工厂类 ShapeFactory。  
Creational.Factory，我们的演示类使用 ShapeFactory 来获取 Shape 对象。它将向 ShapeFactory 传递信息( CIRCLE / RECTANGLE / SQUARE ),以便获取它所需对象的类型。


### 步骤 1.
创建实现接口的实体类。
```javascript
// Rectangle.js
class Rectangle {
    draw() {
        console.log("Inside Rectangle::draw() method.");
    }
}

// Square.js
class Square {
    draw() {
        console.log("Inside Square::draw() method.");
    }
}

// Circle.js
class Circle {
    draw() {
        console.log("Inside Circle::draw() method.");
    }
}
```

### 步骤 2
创建一个工厂，生成基于给定信息的实体类的对象。
```js
// ShapeFactory.js
class ShapeFactory {
    getShape(shapeType) {
        if (shapeType == null || typeof shapeType != "string") {
            return null;
        }

        if (shapeType === "CIRCLE") {
            return new Circle();
        } else if (shapeType === "RECTANGLE") {
            return new Rectangle();
        } else if (shapeType === "SQUARE") {
            return new Square();
        }

        return null;
    }
}
```

### 步骤 4
使用该工厂，通过传递类型信息来获取实体类的对象。
```js
// main.js
let shapeFactory = new ShapeFactory();

//获取 Circle 的对象，并调用它的 draw 方法
let circle = shapeFactory.getShape("CIRCLE");

//调用 Circle 的 draw 方法
circle.draw();

//获取 Rectangle 的对象，并调用它的 draw 方法
let rectangle = shapeFactory.getShape("RECTANGLE");

//调用 Rectangle 的 draw 方法
rectangle.draw();

//获取 Square 的对象，并调用它的 draw 方法
let square = shapeFactory.getShape("SQUARE");

//调用 Square 的 draw 方法
square.draw();

```


