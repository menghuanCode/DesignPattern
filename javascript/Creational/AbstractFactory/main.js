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