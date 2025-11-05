import { Car } from '../models/Car';
import { ElectricCar } from '../models/ElectricCar';
import { SportsCar } from '../models/SportsCar';

export class CarFactory {
  public static createRegularCar(
    make: string,
    model: string,
    year: number,
    color: any,
    engine: any,
    doors: number,
    transmission: any,
    fuelType: any,
    maxSpeed: number
  ): Car {
    return new Car(make, model, year, color, engine, doors, transmission, fuelType, maxSpeed);
  }

  public static createSportsCar(
    make: string,
    model: string,
    year: number,
    color: any,
    engine: any,
    doors: number,
    transmission: any,
    fuelType: any,
    maxSpeed: number,
    turboCharged: boolean = false
  ): SportsCar {
    return new SportsCar(make, model, year, color, engine, doors, transmission, fuelType, maxSpeed, turboCharged);
  }

  public static createElectricCar(
    make: string,
    model: string,
    year: number,
    color: any,
    doors: number,
    transmission: any,
    maxSpeed: number,
    batteryCapacity: number,
    chargingSpeed?: number
  ): ElectricCar {
    return new ElectricCar(make, model, year, color, doors, transmission, maxSpeed, batteryCapacity, chargingSpeed);
  }
}