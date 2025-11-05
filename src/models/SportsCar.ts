import { Car } from './Car';
import { Engine } from './Engine';
import { FuelType, CarColor, TransmissionType } from '../enums/CarEnums';

export class SportsCar extends Car {
  public turboCharged: boolean;
  public topSpeedMode: boolean = false;

  constructor(
    make: string,
    model: string,
    year: number,
    color: CarColor,
    engine: Engine,
    doors: number,
    transmission: TransmissionType,
    fuelType: FuelType,
    maxSpeed: number,
    turboCharged: boolean = false
  ) {
    super(make, model, year, color, engine, doors, transmission, fuelType, maxSpeed);
    this.turboCharged = turboCharged;
  }

  public activateTurbo(): void {
    if (this.turboCharged && this.isRunning) {
      this.topSpeedMode = true;
      console.log("🚀 TURBO ACTIVATED! Maximum performance mode enabled!");
    } else if (!this.turboCharged) {
      console.log("This car doesn't have turbo!");
    } else {
      console.log("Please start the car first!");
    }
  }

  public deactivateTurbo(): void {
    if (this.topSpeedMode) {
      this.topSpeedMode = false;
      console.log("Turbo deactivated. Back to normal mode.");
    }
  }

  public accelerate(speed: number): void {
    if (!this.isRunning) {
      console.log("Please start the car first!");
      return;
    }

    const turboMultiplier = this.topSpeedMode ? 1.5 : 1;
    const adjustedSpeed = speed * turboMultiplier;
    const maxSpeedLimit = this.topSpeedMode ? this.maxSpeed * 1.2 : this.maxSpeed;
    
    const newSpeed = Math.min(this.getCurrentSpeed() + adjustedSpeed, maxSpeedLimit);
    
    // We need to access the private currentSpeed through a setter method
    this.setCurrentSpeed(newSpeed);
    
    const modeText = this.topSpeedMode ? " (TURBO MODE)" : "";
    console.log(`🏎️💨 Sports car accelerating${modeText}... Current speed: ${this.getCurrentSpeed()} km/h`);
  }

  private setCurrentSpeed(speed: number): void {
    // This is a workaround to set the private currentSpeed
    // In a real implementation, you might want to make currentSpeed protected
    (this as any).currentSpeed = speed;
  }

  public getCarDetails(): string {
    const baseDetails = super.getCarDetails();
    return `${baseDetails}
    Turbo Charged: ${this.turboCharged ? 'Yes' : 'No'}
    Turbo Mode: ${this.topSpeedMode ? 'Active' : 'Inactive'}`;
  }
}