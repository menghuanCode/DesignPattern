# 抽象工厂模式

抽象工厂模式( Abstract Factory Pattern ) 是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。
  
 在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显示指定他们的类。每个生产的工厂都能按照工厂模式提供对象。
 
 
## 实现
我们将创建 Shape 和 Color 接口和实现这些接口的实体类。下一步创建抽象工厂类 AbstractFactory。接着定义工厂类 ShapeFactory 和 ColorFactory，这两个工厂类都是扩展了 AbstractFactory。然后创建一个工厂创造器/生成器 FactoryProducer。  
Creational.AbstractFactory，我们使用 FactoryProducer 来获取 AbstractFactory 对象。它将向 AbstractFactory 传递形状信息 Shape( CIRCLE / RECTANGLE / SQUARE )，以便获取它所需对象的类型。同时他还向 AbstractFactory 传递颜色信息 Color( RED / GREEN / BLUE )，以便获取它所需的类型。
 
 ###步骤 1
 为形状创建一个接口。
```php
// Shape.php
Interface Shape{
    public function draw();
}
```

 ### 步骤 2
创建实现接口的实体类。
```php
// Rectangle.php
class Rectangle implements Shape {
    public function draw() {
        echo "Inside Rectangle::draw() method. \n";
    }
}

// Square.php
class Square implements Shape {
    public function draw() {
        echo "Inside Square::draw() method. \n";
    }
}

// Circle.php
class Circle implements Shape {
    public function draw() {
        echo "Inside Circle::draw() method. \n";
    }
}
```

### 步骤 3
为颜色创建一个接口。
```php
// Color.php
interface Color {
    public function fill();
}
```

###步骤4
创建实现接口的实体类。
```php
// Red.php
class Red implements Color {
    public function fill() {
        echo "Inside Red::fill() method. \n";
    }
}

// Green.php
class Green implements Color {
    public function fill() {
        echo "Inside Green::fill() method. \n";
    }
}

// Blue.php
class Blue implements Color {
    public function fill() {
        echo "Inside Blue::fill() method. \n";
    }
}
```

###步骤 5
创建抽象类来获取产品。
```php
// AbstractFactory.php
abstract class AbstractFactory {
    abstract public function getColor($color);
    abstract public function getShape($shape);
}
```

### 步骤 6    
创建 AbstractFactory 扩展的工厂类，基于给定的信息生成实体类的对象。
```php
// ShapeFactory.php

require_once "./AbstractFactory.php";
require_once "./Circle.php";
require_once "./Rectangle.php";
require_once "./Square.php";

class ShapeFactory extends AbstractFactory {

    public function getColor($color) {
        return null;
    }

    public function getShape($shapeType) {
        if($shapeType == null){
            return null;
        }
        if($shapeType == "CIRCLE"){
            return new Circle();
        } else if($shapeType == "RECTANGLE"){
            return new Rectangle();
        } else if($shapeType == "SQUARE"){
            return new Square();
        }
        return null;
    }

}

// ColorFactory.php

require_once "./AbstractFactory.php";
require_once "./Red.php";
require_once "./Green.php";
require_once "./Blue.php";


class ColorFactory extends AbstractFactory{

    public function getColor($color) {
        if($color == null){
            return null;
        }
        if($color === "RED"){
            return new Red();
        } else if($color == "GREEN"){
            return new Green();
        } else if($color == "BLUE"){
            return new Blue();
        }
        return null;
    }

    public function getShape($shape) {
        return null;
    }
}

```

### 步骤 7
创建一个工厂创造器/生成器类，通过传递形状或颜色信息来获取工厂。
```php
// FactoryProducer.php

require_once "./ShapeFactory.php";
require_once "./ColorFactory.php";

class FactoryProducer {
    public static function getFactory($choice) {
        if($choice == "SHAPE"){
            return new ShapeFactory();
        } else if($choice =="COLOR"){
            return new ColorFactory();
        }
        return null;
    }
}
```

### 步骤 8
使用 FactoryProducer 来获取工厂类，通过传递类型信息来获取实体类的对象。
```php
// main.php

require_once "./Shape.php";
require_once "./Color.php";
require_once "./FactoryProducer.php";

class Main {

    function __construct() {
        // 获取形状工厂
        $shapeFactory = FactoryProducer::getFactory("SHAPE");
        // 获取形状为 Circle 的对象
        $circle = $shapeFactory->getShape("CIRCLE");
        // 调用 Circle 的 draw 方法
        $circle->draw();
        //获取形状为 Square 的对象
        $square = $shapeFactory->getShape("SQUARE");
        //调用 Square 的 draw 方法
        $square->draw();

        //获取颜色工厂
        $fillFactory = FactoryProducer::getFactory("COLOR");
        //获取颜色为 Red 的对象
        $red = $fillFactory->getColor("RED");
        //调用 Red 的 fill 方法
        $red->fill();
        //获取颜色为 Green 的对象
        $green = $fillFactory->getColor("GREEN");
        //调用 Green 的 fill 方法
        $green->fill();
        //获取颜色为 Blue 的对象
        $blue = $fillFactory->getColor("BLUE");
        //调用 Blue 的 fill 方法
        $blue->fill();
    }

}

$main = new Main();
```
