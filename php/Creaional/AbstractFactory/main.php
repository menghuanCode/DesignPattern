<?php

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