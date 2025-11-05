import { Vehicle } from './Vehicle';
import { Engine } from './Engine';
import { FuelType, CarColor, TransmissionType } from '../enums/CarEnums';

export class Car extends Vehicle {
  public doors: number;
  public transmission: TransmissionType;
  public fuelType: FuelType;
  public maxSpeed: number;
  private currentSpeed: number = 0;

  constructor(
    make: string,
    model: string,
    year: number,
    color: CarColor,
    engine: Engine,
    doors: number,
    transmission: TransmissionType,
    fuelType: FuelType,
    maxSpeed: number
  ) {
    super(make, model, year, color, engine);
    this.doors = doors;
    this.transmission = transmission;
    this.fuelType = fuelType;
    this.maxSpeed = maxSpeed;
  }

  public accelerate(speed: number): void {
    if (!this.isRunning) {
      console.log("Please start the car first!");
      return;
    }

    const newSpeed = Math.min(this.currentSpeed + speed, this.maxSpeed);
    this.currentSpeed = newSpeed;
    console.log(`🏎️ Accelerating... Current speed: ${this.currentSpeed} km/h`);
  }

  public brake(speed: number): void {
    const newSpeed = Math.max(this.currentSpeed - speed, 0);
    this.currentSpeed = newSpeed;
    console.log(`🛑 Braking... Current speed: ${this.currentSpeed} km/h`);
  }

  public honk(): void {
    console.log("🔊 Beep beep!");
  }

  public getMaxSpeed(): number {
    return this.maxSpeed;
  }

  public getFuelType(): FuelType {
    return this.fuelType;
  }

  public getCurrentSpeed(): number {
    return this.currentSpeed;
  }

  public getCarDetails(): string {
    return `${this.getInfo()}
    Engine: ${this.engine.getEngineInfo()}
    Doors: ${this.doors}
    Transmission: ${this.transmission}
    Fuel Type: ${this.fuelType}
    Max Speed: ${this.maxSpeed} km/h
    Current Speed: ${this.currentSpeed} km/h`;
  }
}