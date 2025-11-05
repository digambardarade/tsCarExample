import { Car } from './models/Car';
import { SportsCar } from './models/SportsCar';
import { ElectricCar } from './models/ElectricCar';
import { Engine } from './models/Engine';
import { CarFactory } from './factories/CarFactory';
import { CarUtils } from './utils/CarUtils';
import { FuelType, CarColor, TransmissionType } from './enums/CarEnums';

// Create car instances for browser interaction
const v6Engine = new Engine("V6", 280, 6);
const v8Engine = new Engine("V8", 450, 8);

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

// UI Update Functions
function updateRegularCarUI() {
  const speedEl = document.getElementById('regularSpeed');
  const statusEl = document.getElementById('regularStatus');
  const outputEl = document.getElementById('regularOutput');
  
  if (speedEl) speedEl.textContent = regularCar.getCurrentSpeed().toString();
  if (statusEl) {
    statusEl.className = `status-indicator ${regularCar.isVehicleRunning() ? 'status-running' : 'status-stopped'}`;
  }
}

function updateSportsCarUI() {
  const speedEl = document.getElementById('sportsSpeed');
  const statusEl = document.getElementById('sportsStatus');
  
  if (speedEl) speedEl.textContent = sportsCar.getCurrentSpeed().toString();
  if (statusEl) {
    statusEl.className = `status-indicator ${sportsCar.isVehicleRunning() ? 'status-running' : 'status-stopped'}`;
  }
}

function updateElectricCarUI() {
  const speedEl = document.getElementById('electricSpeed');
  const statusEl = document.getElementById('electricStatus');
  const batteryEl = document.getElementById('batteryLevel');
  const rangeEl = document.getElementById('rangeDisplay');
  
  if (speedEl) speedEl.textContent = electricCar.getCurrentSpeed().toString();
  if (statusEl) {
    statusEl.className = `status-indicator ${electricCar.isVehicleRunning() ? 'status-running' : 'status-stopped'}`;
  }
  if (batteryEl) batteryEl.textContent = (electricCar as any).currentCharge.toFixed(1);
  if (rangeEl) rangeEl.textContent = electricCar.getRange().toString();
}

function logToOutput(elementId: string, message: string) {
  const outputEl = document.getElementById(elementId);
  if (outputEl) {
    const timestamp = new Date().toLocaleTimeString();
    outputEl.textContent += `[${timestamp}] ${message}\n`;
    outputEl.scrollTop = outputEl.scrollHeight;
  }
}

// Regular Car Functions
function startRegularCar() {
  console.log('Starting regular car...');
  regularCar.start();
  updateRegularCarUI();
  logToOutput('regularOutput', `${regularCar.make} ${regularCar.model} started`);
}

function accelerateRegularCar() {
  regularCar.accelerate(30);
  updateRegularCarUI();
  logToOutput('regularOutput', `Accelerated to ${regularCar.getCurrentSpeed()} km/h`);
}

function brakeRegularCar() {
  regularCar.brake(20);
  updateRegularCarUI();
  logToOutput('regularOutput', `Braked to ${regularCar.getCurrentSpeed()} km/h`);
}

function honkRegularCar() {
  regularCar.honk();
  logToOutput('regularOutput', 'Beep beep! 🔊');
}

function stopRegularCar() {
  regularCar.stop();
  updateRegularCarUI();
  logToOutput('regularOutput', `${regularCar.make} ${regularCar.model} stopped`);
}

// Sports Car Functions
function startSportsCar() {
  sportsCar.start();
  updateSportsCarUI();
  logToOutput('sportsOutput', `${sportsCar.make} ${sportsCar.model} started`);
}

function accelerateSportsCar() {
  sportsCar.accelerate(50);
  updateSportsCarUI();
  logToOutput('sportsOutput', `Accelerated to ${sportsCar.getCurrentSpeed()} km/h`);
}

function brakeSportsCar() {
  sportsCar.brake(30);
  updateSportsCarUI();
  logToOutput('sportsOutput', `Braked to ${sportsCar.getCurrentSpeed()} km/h`);
}

function activateTurbo() {
  sportsCar.activateTurbo();
  logToOutput('sportsOutput', 'TURBO ACTIVATED! 🚀');
}

function deactivateTurbo() {
  sportsCar.deactivateTurbo();
  logToOutput('sportsOutput', 'Turbo deactivated');
}

function honkSportsCar() {
  sportsCar.honk();
  logToOutput('sportsOutput', 'Beep beep! 🔊');
}

function stopSportsCar() {
  sportsCar.stop();
  updateSportsCarUI();
  logToOutput('sportsOutput', `${sportsCar.make} ${sportsCar.model} stopped`);
}

// Electric Car Functions
function startElectricCar() {
  electricCar.start();
  updateElectricCarUI();
  logToOutput('electricOutput', `${electricCar.make} ${electricCar.model} powered on`);
}

function accelerateElectricCar() {
  electricCar.accelerate(40);
  updateElectricCarUI();
  logToOutput('electricOutput', `Accelerated to ${electricCar.getCurrentSpeed()} km/h | Battery: ${(electricCar as any).currentCharge.toFixed(1)}%`);
}

function brakeElectricCar() {
  electricCar.brake(25);
  updateElectricCarUI();
  logToOutput('electricOutput', `Braked to ${electricCar.getCurrentSpeed()} km/h`);
}

function chargeElectricCar() {
  electricCar.charge(30);
  updateElectricCarUI();
  logToOutput('electricOutput', `Charged for 30 minutes | Battery: ${(electricCar as any).currentCharge.toFixed(1)}%`);
}

function honkElectricCar() {
  electricCar.honk();
  logToOutput('electricOutput', 'Beep beep! 🔊');
}

function stopElectricCar() {
  electricCar.stop();
  updateElectricCarUI();
  logToOutput('electricOutput', `${electricCar.make} ${electricCar.model} powered off`);
}

// Utility Functions
function runUtilityDemo() {
  const results = [
    `Regular car age: ${CarUtils.formatCarAge(regularCar.year)}`,
    `Sports car is vintage: ${CarUtils.isVintage(sportsCar.year)}`,
    `Electric car depreciation from $100,000: $${CarUtils.calculateDepreciation(100000, electricCar.year)}`,
    `Convert 60 mph to km/h: ${CarUtils.convertMphToKmh(60)} km/h`,
    `Convert 100 km to miles: ${CarUtils.convertKmToMiles(100)} miles`,
    `Fuel efficiency (500 km / 40L): ${CarUtils.calculateFuelEfficiency(500, 40)} km/L`
  ];
  
  const outputEl = document.getElementById('utilityResults');
  if (outputEl) {
    outputEl.textContent = results.join('\n');
  }
}

function clearUtilityResults() {
  const outputEl = document.getElementById('utilityResults');
  if (outputEl) {
    outputEl.textContent = 'Click "Run All Utilities" to see conversion and calculation examples...';
  }
}

// Polymorphism Demo
function runPolymorphismDemo() {
  const cars = [regularCar, sportsCar, electricCar];
  const results = ['All cars information:'];
  
  cars.forEach((car, index) => {
    results.push(`\nCar ${index + 1}:`);
    results.push(`- ${car.getInfo()}`);
    results.push(`- Max Speed: ${car.getMaxSpeed()} km/h`);
    results.push(`- Fuel Type: ${car.getFuelType()}`);
    results.push(`- Engine: ${car.engine.getEngineInfo()}`);
  });
  
  const outputEl = document.getElementById('polymorphismOutput');
  if (outputEl) {
    outputEl.textContent = results.join('\n');
  }
}

function clearPolymorphismResults() {
  const outputEl = document.getElementById('polymorphismOutput');
  if (outputEl) {
    outputEl.textContent = 'Click "Show All Cars Info" to see polymorphism in action...';
  }
}

// Expose functions to global scope for HTML onclick handlers
(window as any).startRegularCar = startRegularCar;
(window as any).accelerateRegularCar = accelerateRegularCar;
(window as any).brakeRegularCar = brakeRegularCar;
(window as any).honkRegularCar = honkRegularCar;
(window as any).stopRegularCar = stopRegularCar;

(window as any).startSportsCar = startSportsCar;
(window as any).accelerateSportsCar = accelerateSportsCar;
(window as any).brakeSportsCar = brakeSportsCar;
(window as any).activateTurbo = activateTurbo;
(window as any).deactivateTurbo = deactivateTurbo;
(window as any).honkSportsCar = honkSportsCar;
(window as any).stopSportsCar = stopSportsCar;

(window as any).startElectricCar = startElectricCar;
(window as any).accelerateElectricCar = accelerateElectricCar;
(window as any).brakeElectricCar = brakeElectricCar;
(window as any).chargeElectricCar = chargeElectricCar;
(window as any).honkElectricCar = honkElectricCar;
(window as any).stopElectricCar = stopElectricCar;

(window as any).runUtilityDemo = runUtilityDemo;
(window as any).clearUtilityResults = clearUtilityResults;

(window as any).runPolymorphismDemo = runPolymorphismDemo;
(window as any).clearPolymorphismResults = clearPolymorphismResults;

// Initialize UI on page load
document.addEventListener('DOMContentLoaded', () => {
  updateRegularCarUI();
  updateSportsCarUI();
  updateElectricCarUI();
  
  // Show welcome message
  console.log('🚗 TypeScript Car Example loaded! Use the buttons to interact with the cars.');
});