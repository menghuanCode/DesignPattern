# 工厂模式

工厂模式（Factory Pattern）是 面向对象 中最常用的设计模式之一。这种类型的设计模式属于创建型模式，他提供了一种创建对象的最佳方式。在工厂模式中，我们创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象。

## 实现
我们将创建一个 Shape 接口和实现 Shape 接口的实体类。下一步是定义工厂类 ShapeFactory。  
Creational.Factory，我们的演示类使用 ShapeFactory 来获取 Shape 对象。它将向 ShapeFactory 传递信息( CIRCLE / RECTANGLE / SQUARE ),以便获取它所需对象的类型。

### 步骤 1
创建一个接口：
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
创建一个工厂，生成基于给定信息的实体类的对象。
```java
// ShapeFactory.java
public class ShapeFactory {
    
   //使用 getShape 方法获取形状类型的对象
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
}
```

### 步骤 4
使用该工厂，通过传递类型信息来获取实体类的对象。
```java
// main.java
public class main {
    public static void main(String[] args) {
        ShapeFactory shapeFactory = new ShapeFactory();

        // 获取 Circle 的对象，并调用它的 draw 方法
        Shape circle = shapeFactory.getShape("CIRCLE");
        // 调用 Circle 的 draw 方法
        circle.draw();

        // 获取 Rectangle 的对象，并调用它的 draw 方法
        Shape rectangle = shapeFactory.getShape("RECTANGLE");
        // 调用 Rectangle 的 draw 方法
        rectangle.draw();

        // 获取 Square 的对象，并调用它的 draw 方法
        Shape square = shapeFactory.getShape("SQUARE");
        // 调用 Square 的 draw 方法
        square.draw();

    }
}

```


