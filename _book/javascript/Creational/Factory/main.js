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