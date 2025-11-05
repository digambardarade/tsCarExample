import { Car } from './models/Car';
import { SportsCar } from './models/SportsCar';
import { ElectricCar } from './models/ElectricCar';
import { Engine } from './models/Engine';
import { CarFactory } from './factories/CarFactory';
import { CarUtils } from './utils/CarUtils';
import { FuelType, CarColor, TransmissionType } from './enums/CarEnums';

console.log("🚗 Welcome to the TypeScript Car Example! 🚗\n");

// Create engines
const v6Engine = new Engine("V6", 280, 6);
const v8Engine = new Engine("V8", 450, 8);
const turbocharged4 = new Engine("Turbocharged I4", 350, 4);

console.log("=== Creating Regular Car ===");
const regularCar = CarFactory.createRegularCar(
  "Toyota",
  "Camry",
  2023,
  CarColor.BLUE,
  v6Engine,
  4,
  TransmissionType.AUTOMATIC,
  FuelType.GASOLINE,
  200
);

console.log(regularCar.getCarDetails());
console.log("\n--- Testing Regular Car ---");
regularCar.start();
regularCar.accelerate(50);
regularCar.honk();
regularCar.brake(20);
regularCar.stop();

console.log("\n=== Creating Sports Car ===");
const sportsCar = CarFactory.createSportsCar(
  "Ferrari",
  "F8 Tributo",
  2024,
  CarColor.RED,
  v8Engine,
  2,
  TransmissionType.AUTOMATIC,
  FuelType.GASOLINE,
  340,
  true // turbo charged
);

console.log(sportsCar.getCarDetails());
console.log("\n--- Testing Sports Car ---");
sportsCar.start();
sportsCar.accelerate(80);
sportsCar.activateTurbo();
sportsCar.accelerate(60);
sportsCar.honk();
sportsCar.deactivateTurbo();
sportsCar.brake(50);
sportsCar.stop();

console.log("\n=== Creating Electric Car ===");
const electricCar = CarFactory.createElectricCar(
  "Tesla",
  "Model S",
  2024,
  CarColor.WHITE,
  4,
  TransmissionType.AUTOMATIC,
  250,
  100, // 100 kWh battery
  150  // 150 kW charging speed
);

console.log(electricCar.getCarDetails());
console.log("\n--- Testing Electric Car ---");
electricCar.start();
electricCar.accelerate(60);
electricCar.accelerate(40);
electricCar.brake(30);
console.log("--- Charging the car ---");
electricCar.charge(30); // Charge for 30 minutes
electricCar.stop();

console.log("\n=== Car Utilities Demo ===");
console.log(`Regular car age: ${CarUtils.formatCarAge(regularCar.year)}`);
console.log(`Sports car is vintage: ${CarUtils.isVintage(sportsCar.year)}`);
console.log(`Electric car depreciation from $100,000: $${CarUtils.calculateDepreciation(100000, electricCar.year)}`);
console.log(`Convert 60 mph to km/h: ${CarUtils.convertMphToKmh(60)} km/h`);
console.log(`Convert 100 km to miles: ${CarUtils.convertKmToMiles(100)} miles`);
console.log(`Fuel efficiency (500 km / 40L): ${CarUtils.calculateFuelEfficiency(500, 40)} km/L`);

console.log("\n=== Polymorphism Demo ===");
const cars: Car[] = [regularCar, sportsCar, electricCar];

console.log("All cars information:");
cars.forEach((car, index) => {
  console.log(`\nCar ${index + 1}:`);
  console.log(`- ${car.getInfo()}`);
  console.log(`- Max Speed: ${car.getMaxSpeed()} km/h`);
  console.log(`- Fuel Type: ${car.getFuelType()}`);
  console.log(`- Engine: ${car.engine.getEngineInfo()}`);
});

console.log("\n🎉 Car example completed successfully! 🎉");