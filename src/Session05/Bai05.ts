class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }
    public getWidth(): number {
        return this.width;
    }
    public setWidth(width: number): void {
        this.width = width;
    }
    public getHeight(): number {
        return this.height;
    }
    public setHeight(height: number): void {
        this.height = height;
    }
    public getArea(): number {
        return this.width * this.height;
    }
    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
let rec = new Rectangle(10, 20);
console.log("Chiều rộng:", rec.getWidth());
console.log("Chiều dài:", rec.getHeight());
console.log("Chu vi:", rec.getPerimeter());
console.log("Diện tích:", rec.getArea());
rec.setWidth(15);
rec.setHeight(25);
console.log("Chiều rộng mới:", rec.getWidth());
console.log("Chiều dài mới:", rec.getHeight());
console.log("Chu vi mới:", rec.getPerimeter());
console.log("Diện tích mới:", rec.getArea());
