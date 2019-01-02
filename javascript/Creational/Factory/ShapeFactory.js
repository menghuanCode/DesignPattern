class ShapeFactory {
    getShape(shapeType) {
        if (shapeType == null || typeof shapeType != "string") {
            return null;
        }

        if (shapeType === "CIRCLE") {
            return new Circle();
        } else if (shapeType === "RECTANGLE") {
            return new Rectangle();
        } else if (shapeType === "SQUARE") {
            return new Square();
        }

        return null;
    }
}