import { IVehicle } from '../interfaces/IVehicle';
import { Engine } from './Engine';
import { FuelType, CarColor, TransmissionType } from '../enums/CarEnums';

export abstract class Vehicle implements IVehicle {
  public make: string;
  public model: string;
  public year: number;
  public color: CarColor;
  public engine: Engine;
  protected isRunning: boolean = false;

  constructor(make: string, model: string, year: number, color: CarColor, engine: Engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.engine = engine;
  }

  public start(): void {
    if (!this.isRunning) {
      this.engine.start();
      this.isRunning = true;
      console.log(`${this.make} ${this.model} is now running!`);
    } else {
      console.log(`${this.make} ${this.model} is already running!`);
    }
  }

  public stop(): void {
    if (this.isRunning) {
      this.engine.stop();
      this.isRunning = false;
      console.log(`${this.make} ${this.model} has stopped.`);
    } else {
      console.log(`${this.make} ${this.model} is already stopped!`);
    }
  }

  public getInfo(): string {
    return `${this.year} ${this.color} ${this.make} ${this.model}`;
  }

  public isVehicleRunning(): boolean {
    return this.isRunning;
  }

  // Abstract method to be implemented by subclasses
  public abstract getMaxSpeed(): number;
  public abstract getFuelType(): FuelType;
}