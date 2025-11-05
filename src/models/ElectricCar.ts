import { Car } from './Car';
import { Engine } from './Engine';
import { FuelType, CarColor, TransmissionType } from '../enums/CarEnums';

export class ElectricCar extends Car {
  public batteryCapacity: number; // in kWh
  public currentCharge: number; // percentage
  public chargingSpeed: number; // kW

  constructor(
    make: string,
    model: string,
    year: number,
    color: CarColor,
    doors: number,
    transmission: TransmissionType,
    maxSpeed: number,
    batteryCapacity: number,
    chargingSpeed: number = 50
  ) {
    // Electric cars don't have traditional engines, so we create a mock electric motor
    const electricMotor = new Engine("Electric Motor", 300, 0);
    super(make, model, year, color, electricMotor, doors, transmission, FuelType.ELECTRIC, maxSpeed);
    
    this.batteryCapacity = batteryCapacity;
    this.currentCharge = 100; // Start with full charge
    this.chargingSpeed = chargingSpeed;
  }

  public charge(minutes: number): void {
    if (this.currentCharge >= 100) {
      console.log("🔋 Battery is already fully charged!");
      return;
    }

    const chargeAdded = (this.chargingSpeed / 60) * minutes * (100 / this.batteryCapacity);
    this.currentCharge = Math.min(this.currentCharge + chargeAdded, 100);
    
    console.log(`⚡ Charging for ${minutes} minutes...`);
    console.log(`🔋 Battery charge: ${this.currentCharge.toFixed(1)}%`);
  }

  public getRange(): number {
    // Approximate range calculation (assuming 4 km per kWh efficiency)
    return Math.floor((this.batteryCapacity * this.currentCharge / 100) * 4);
  }

  public accelerate(speed: number): void {
    if (!this.isRunning) {
      console.log("Please start the car first!");
      return;
    }

    if (this.currentCharge <= 5) {
      console.log("⚠️ Low battery! Please charge the vehicle.");
      return;
    }

    // Electric cars consume battery while driving
    this.currentCharge = Math.max(this.currentCharge - 0.1, 0);
    
    super.accelerate(speed);
    console.log(`🔋 Battery: ${this.currentCharge.toFixed(1)}% | Range: ${this.getRange()} km`);
  }

  public start(): void {
    if (this.currentCharge <= 0) {
      console.log("⚠️ Battery depleted! Cannot start the vehicle.");
      return;
    }
    
    console.log("🔋 Electric vehicle powering on silently...");
    this.isRunning = true;
    console.log(`${this.make} ${this.model} is now ready to drive!`);
  }

  public getCarDetails(): string {
    const baseDetails = super.getCarDetails().replace(this.engine.getEngineInfo(), 
      `Electric Motor: ${this.engine.horsepower}HP equivalent`);
    
    return `${baseDetails}
    Battery Capacity: ${this.batteryCapacity} kWh
    Current Charge: ${this.currentCharge.toFixed(1)}%
    Estimated Range: ${this.getRange()} km
    Charging Speed: ${this.chargingSpeed} kW`;
  }
}