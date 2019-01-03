# 抽象工厂模式

抽象工厂模式( Abstract Factory Pattern ) 是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。
  
 在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显示指定他们的类。每个生产的工厂都能按照工厂模式提供对象。
 
 
## 实现
我们将创建 Shape 和 Color 接口和实现这些接口的实体类。下一步创建抽象工厂类 AbstractFactory。接着定义工厂类 ShapeFactory 和 ColorFactory，这两个工厂类都是扩展了 AbstractFactory。然后创建一个工厂创造器/生成器 FactoryProducer。  
Creational.AbstractFactory，我们使用 FactoryProducer 来获取 AbstractFactory 对象。它将向 AbstractFactory 传递形状信息 Shape( CIRCLE / RECTANGLE / SQUARE )，以便获取它所需对象的类型。同时他还向 AbstractFactory 传递颜色信息 Color( RED / GREEN / BLUE )，以便获取它所需的类型。
 
 ###步骤 1
 为形状创建一个接口。
```java
// Shape.java
public interface Shape {
   void draw();
}
```

 ### 步骤 2
创建实现接口的实体类。
```java
// Rectangle.java
public class Rectangle implements Shape {
    @Override
    public void draw() {
        System.out.println("Inside Rectangle::draw() method.");
    }
}

// Square.java
public class Square implements Shape {
    @Override
    public void draw() {
        System.out.println("Inside Square::draw() method.");
    }
}

// Circle.java
public class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Inside Circle::draw() method.");
    }
}
```

### 步骤 3
为颜色创建一个接口。
```java
// Color.java
public interface Color {
   void fill();
}
```

###步骤4
创建实现接口的实体类。
```java
// Red.java
public class Red implements Color {
    @Override
    public void fill() {
        System.out.println("Inside Red::fill() method.");
    }
}

// Green.java
public class Green implements Color {
    @Override
    public void fill() {
        System.out.println("Inside Green::fill() method.");
    }
}

// Blue.java
public class Blue implements Color {
    @Override
    public void fill() {
        System.out.println("Inside Blue::fill() method.");
    }
}
```

###步骤 5
为 Color 和 Shape 对象创建抽象类来获取工厂。
```java
// AbstractFactory.java
public abstract class AbstractFactory {
   public abstract Color getColor(String color);
   public abstract Shape getShape(String shape) ;
}
```

### 步骤 6    
创建扩展了 AbstractFactory 的工厂类，基于给定的信息生成实体类的对象。
```java
// ShapeFactory.java
public class ShapeFactory extends AbstractFactory {
    
   @Override
   public Shape getShape(String shapeType){
      if(shapeType == null){
         return null;
      }        
      if(shapeType.equalsIgnoreCase("CIRCLE")){
         return new Circle();
      } else if(shapeType.equalsIgnoreCase("RECTANGLE")){
         return new Rectangle();
      } else if(shapeType.equalsIgnoreCase("SQUARE")){
         return new Square();
      }
      return null;
   }
   
   @Override
   public Color getColor(String color) {
      return null;
   }
}

// ColorFactory.java
public class ColorFactory extends AbstractFactory {
    
   @Override
   public Shape getShape(String shapeType){
      return null;
   }
   
   @Override
   public Color getColor(String color) {
      if(color == null){
         return null;
      }        
      if(color.equalsIgnoreCase("RED")){
         return new Red();
      } else if(color.equalsIgnoreCase("GREEN")){
         return new Green();
      } else if(color.equalsIgnoreCase("BLUE")){
         return new Blue();
      }
      return null;
   }
}
```

### 步骤 7
创建一个工厂创造器/生成器类，通过传递形状或颜色信息来获取工厂。
```java
// FactoryProducer.java
public class FactoryProducer {
   public static AbstractFactory getFactory(String choice){
      if(choice.equalsIgnoreCase("SHAPE")){
         return new ShapeFactory();
      } else if(choice.equalsIgnoreCase("COLOR")){
         return new ColorFactory();
      }
      return null;
   }
}
```

### 步骤 8
使用 FactoryProducer 来获取 AbstractFactory，通过传递类型信息来获取实体类的对象。
```java
// main.java
public class main {
    public static void main(String[] args) {

        //获取形状工厂
        AbstractFactory shapeFactory = FactoryProducer.getFactory("SHAPE");
        //获取形状为 Circle 的对象
        Shape circle = shapeFactory.getShape("CIRCLE");
        //调用 Circle 的 draw 方法
        circle.draw();
        //获取形状为 Square 的对象
        Shape square = shapeFactory.getShape("SQUARE");
        //调用 Square 的 draw 方法
        square.draw();

        //获取颜色工厂
        AbstractFactory fillFactory = FactoryProducer.getFactory("COLOR");
        //获取颜色为 Red 的对象
        Color red = fillFactory.getColor("RED");
        //调用 Red 的 fill 方法
        red.fill();
        //获取颜色为 Green 的对象
        Color green = fillFactory.getColor("GREEN");
        //调用 Green 的 fill 方法
        green.fill();
        //获取颜色为 Blue 的对象
        Color blue = fillFactory.getColor("BLUE");
        //调用 Blue 的 fill 方法
        blue.fill();
    }
}
```
