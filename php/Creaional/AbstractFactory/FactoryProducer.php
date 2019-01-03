<?php

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
