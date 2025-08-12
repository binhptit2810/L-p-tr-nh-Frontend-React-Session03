interface ChangeSpeed {
  speedUp(amount: number): void;
  slowDown(amount: number): void;
  stop(): void;
}
class Vehicle implements ChangeSpeed {
  private speed: number;
  constructor(initialSpeed: number = 0) {
    this.speed = initialSpeed;
  }
  speedUp(amount: number): void {
    this.speed += amount;
    console.log(`Toc do hien tai: ${this.speed} km/h`);
  }
  slowDown(amount: number): void {
    this.speed -= amount;
    if (this.speed < 0) this.speed = 0;
    console.log(`Toc do hien tai: ${this.speed} km/h`);
  }
  stop(): void {
    this.speed = 0;
    console.log(`Phuong tien da dung. Toc do: ${this.speed} km/h`);
  }
}
let xe = new Vehicle();
xe.speedUp(50);  
xe.slowDown(20); 
xe.stop();        
