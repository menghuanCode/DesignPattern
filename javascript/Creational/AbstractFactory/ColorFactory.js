class ColorFactory extends AbstractFactory {

    getColor(color) {
        if(color == null){
            return null;
        }
        if( color === "RED"){
            return new Red();
        } else if( color === "GREEN" ){
            return new Green();
        } else if( color === "BLUE"){
            return new Blue();
        }
        return null;
    }

}
