<?php

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
