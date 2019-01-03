class FactoryProducer {
    static getFactory(choice) {
        if(choice === "SHAPE"){
            return new ShapeFactory();
        } else if(choice === "COLOR"){
            return new ColorFactory();
        }
        return null;
    }
}


