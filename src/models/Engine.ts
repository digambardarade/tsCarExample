import { IEngine } from '../interfaces/IVehicle';

export class Engine implements IEngine {
  public type: string;
  public horsepower: number;
  public cylinders: number;
  private isRunning: boolean = false;

  constructor(type: string, horsepower: number, cylinders: number) {
    this.type = type;
    this.horsepower = horsepower;
    this.cylinders = cylinders;
  }

  public start(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      console.log(`${this.type} engine started! 🚗`);
    } else {
      console.log("Engine is already running!");
    }
  }

  public stop(): void {
    if (this.isRunning) {
      this.isRunning = false;
      console.log(`${this.type} engine stopped.`);
    } else {
      console.log("Engine is already stopped!");
    }
  }

  public getEngineInfo(): string {
    return `${this.type} Engine: ${this.horsepower}HP, ${this.cylinders} cylinders`;
  }

  public isEngineRunning(): boolean {
    return this.isRunning;
  }
}