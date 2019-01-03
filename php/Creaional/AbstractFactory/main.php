package Creational.AbstractFactory;

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
