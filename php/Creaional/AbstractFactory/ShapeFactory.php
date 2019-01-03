<?php

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
