import { Car } from './models/Car';
import { SportsCar } from './models/SportsCar';
import { ElectricCar } from './models/ElectricCar';
import { Engine } from './models/Engine';
import { CarFactory } from './factories/CarFactory';
import { CarUtils } from './utils/CarUtils';
import { FuelType, CarColor, TransmissionType } from './enums/CarEnums';

// Global variables to hold our cars
let regularCar: Car;
let sportsCar: SportsCar;
let electricCar: ElectricCar;

// Initialize cars when the page loads
function initializeCars(): void {
    // Create engines
    const v6Engine = new Engine("V6", 280, 6);
    const v8Engine = new Engine("V8", 450, 8);

    // Create cars
    regularCar = CarFactory.createRegularCar(
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

    sportsCar = CarFactory.createSportsCar(
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

    electricCar = CarFactory.createElectricCar(
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

    console.log("Cars initialized successfully!");
}

// Helper function to update output
function updateOutput(elementId: string, message: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent += message + '\n';
        element.scrollTop = element.scrollHeight;
    }
}

// Helper function to clear output
function clearOutput(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = '';
    }
}

// Helper function to update status
function updateStatus(statusId: string, isRunning: boolean): void {
    const element = document.getElementById(statusId);
    if (element) {
        element.className = `status-indicator ${isRunning ? 'status-running' : 'status-stopped'}`;
    }
}

// Helper function to update speed display
function updateSpeed(speedId: string, speed: number): void {
    const element = document.getElementById(speedId);
    if (element) {
        element.textContent = speed.toString();
    }
}

// Regular Car Functions
function startRegularCar(): void {
    clearOutput('regularOutput');
    regularCar.start();
    updateOutput('regularOutput', '🚗 Toyota Camry engine started!');
    updateStatus('regularStatus', regularCar.isVehicleRunning());
}

function accelerateRegularCar(): void {
    if (!regularCar.isVehicleRunning()) {
        updateOutput('regularOutput', '⚠️ Please start the car first!');
        return;
    }
    regularCar.accelerate(30);
    updateOutput('regularOutput', `🏎️ Accelerating... Current speed: ${regularCar.getCurrentSpeed()} km/h`);
    updateSpeed('regularSpeed', regularCar.getCurrentSpeed());
}

function brakeRegularCar(): void {
    regularCar.brake(20);
    updateOutput('regularOutput', `🛑 Braking... Current speed: ${regularCar.getCurrentSpeed()} km/h`);
    updateSpeed('regularSpeed', regularCar.getCurrentSpeed());
}

function honkRegularCar(): void {
    regularCar.honk();
    updateOutput('regularOutput', '🔊 Beep beep!');
}

function stopRegularCar(): void {
    regularCar.stop();
    updateOutput('regularOutput', '🛑 Toyota Camry engine stopped.');
    updateStatus('regularStatus', false);
    updateSpeed('regularSpeed', 0);
}

// Sports Car Functions
function startSportsCar(): void {
    clearOutput('sportsOutput');
    sportsCar.start();
    updateOutput('sportsOutput', '🏎️ Ferrari F8 Tributo engine roaring to life!');
    updateStatus('sportsStatus', sportsCar.isVehicleRunning());
}

function accelerateSportsCar(): void {
    if (!sportsCar.isVehicleRunning()) {
        updateOutput('sportsOutput', '⚠️ Please start the car first!');
        return;
    }
    sportsCar.accelerate(50);
    const turboText = (sportsCar as any).topSpeedMode ? ' (TURBO MODE)' : '';
    updateOutput('sportsOutput', `🏎️💨 Sports car accelerating${turboText}... Current speed: ${sportsCar.getCurrentSpeed()} km/h`);
    updateSpeed('sportsSpeed', sportsCar.getCurrentSpeed());
}

function activateTurbo(): void {
    sportsCar.activateTurbo();
    updateOutput('sportsOutput', '🚀 TURBO ACTIVATED! Maximum performance mode enabled!');
}

function deactivateTurbo(): void {
    sportsCar.deactivateTurbo();
    updateOutput('sportsOutput', 'Turbo deactivated. Back to normal mode.');
}

function brakeSportsCar(): void {
    sportsCar.brake(30);
    updateOutput('sportsOutput', `🛑 Braking... Current speed: ${sportsCar.getCurrentSpeed()} km/h`);
    updateSpeed('sportsSpeed', sportsCar.getCurrentSpeed());
}

function honkSportsCar(): void {
    sportsCar.honk();
    updateOutput('sportsOutput', '🔊 BEEP BEEP! (Sports car horn)');
}

function stopSportsCar(): void {
    sportsCar.stop();
    updateOutput('sportsOutput', '🛑 Ferrari F8 Tributo engine stopped.');
    updateStatus('sportsStatus', false);
    updateSpeed('sportsSpeed', 0);
}

// Electric Car Functions
function startElectricCar(): void {
    clearOutput('electricOutput');
    electricCar.start();
    updateOutput('electricOutput', '⚡ Tesla Model S powering on silently...');
    updateStatus('electricStatus', electricCar.isVehicleRunning());
}

function accelerateElectricCar(): void {
    if (!electricCar.isVehicleRunning()) {
        updateOutput('electricOutput', '⚠️ Please power on the car first!');
        return;
    }
    electricCar.accelerate(40);
    updateOutput('electricOutput', `⚡ Accelerating... Current speed: ${electricCar.getCurrentSpeed()} km/h`);
    updateSpeed('electricSpeed', electricCar.getCurrentSpeed());
    updateBatteryDisplay();
}

function brakeElectricCar(): void {
    electricCar.brake(25);
    updateOutput('electricOutput', `🛑 Regenerative braking... Current speed: ${electricCar.getCurrentSpeed()} km/h`);
    updateSpeed('electricSpeed', electricCar.getCurrentSpeed());
}

function chargeElectricCar(): void {
    electricCar.charge(30);
    updateOutput('electricOutput', '⚡ Charging for 30 minutes...');
    updateBatteryDisplay();
}

function honkElectricCar(): void {
    electricCar.honk();
    updateOutput('electricOutput', '🔊 Silent beep! (Electric horn)');
}

function stopElectricCar(): void {
    electricCar.stop();
    updateOutput('electricOutput', '🔌 Tesla Model S powered off.');
    updateStatus('electricStatus', false);
    updateSpeed('electricSpeed', 0);
}

function updateBatteryDisplay(): void {
    const batteryElement = document.getElementById('batteryLevel');
    const rangeElement = document.getElementById('rangeDisplay');
    
    if (batteryElement && rangeElement) {
        batteryElement.textContent = (electricCar as any).currentCharge.toFixed(1);
        rangeElement.textContent = electricCar.getRange().toString();
    }
}

// Utility Functions Demo
function runUtilityDemo(): void {
    const output = document.getElementById('utilityResults');
    if (!output) return;

    let results = '🛠️ Utility Functions Results:\n\n';
    
    results += `🚗 Regular car age: ${CarUtils.formatCarAge(regularCar.year)}\n`;
    results += `🏎️ Sports car is vintage: ${CarUtils.isVintage(sportsCar.year)}\n`;
    results += `⚡ Electric car depreciation from $100,000: $${CarUtils.calculateDepreciation(100000, electricCar.year)}\n\n`;
    
    results += '📐 Unit Conversions:\n';
    results += `• Convert 60 mph to km/h: ${CarUtils.convertMphToKmh(60)} km/h\n`;
    results += `• Convert 100 km to miles: ${CarUtils.convertKmToMiles(100)} miles\n`;
    results += `• Convert 200 km/h to mph: ${CarUtils.convertKmhToMph(200)} mph\n\n`;
    
    results += '⛽ Fuel Efficiency:\n';
    results += `• 500 km with 40L fuel: ${CarUtils.calculateFuelEfficiency(500, 40)} km/L\n`;
    results += `• 300 miles with 15 gallons: ${CarUtils.calculateFuelEfficiency(CarUtils.convertMilesToKm(300), 15 * 3.78541)} km/L\n`;

    output.textContent = results;
}

function clearUtilityResults(): void {
    const output = document.getElementById('utilityResults');
    if (output) {
        output.textContent = 'Click "Run All Utilities" to see conversion and calculation examples...';
    }
}

// Polymorphism Demo
function runPolymorphismDemo(): void {
    const output = document.getElementById('polymorphismOutput');
    if (!output) return;

    let results = '🔄 Polymorphism Demo - All Cars Information:\n\n';
    
    const cars: Car[] = [regularCar, sportsCar, electricCar];
    
    cars.forEach((car, index) => {
        results += `Car ${index + 1}:\n`;
        results += `• ${car.getInfo()}\n`;
        results += `• Max Speed: ${car.getMaxSpeed()} km/h\n`;
        results += `• Fuel Type: ${car.getFuelType()}\n`;
        results += `• Engine: ${car.engine.getEngineInfo()}\n`;
        results += `• Current Speed: ${car.getCurrentSpeed()} km/h\n`;
        results += `• Running: ${car.isVehicleRunning() ? 'Yes' : 'No'}\n\n`;
    });

    results += '✨ This demonstrates polymorphism - different car types\n';
    results += 'are treated uniformly through the Car base class interface!';

    output.textContent = results;
}

function clearPolymorphismResults(): void {
    const output = document.getElementById('polymorphismOutput');
    if (output) {
        output.textContent = 'Click "Show All Cars Info" to see polymorphism in action...';
    }
}

// Make functions globally available
declare global {
    interface Window {
        startRegularCar: () => void;
        accelerateRegularCar: () => void;
        brakeRegularCar: () => void;
        honkRegularCar: () => void;
        stopRegularCar: () => void;
        startSportsCar: () => void;
        accelerateSportsCar: () => void;
        activateTurbo: () => void;
        deactivateTurbo: () => void;
        brakeSportsCar: () => void;
        honkSportsCar: () => void;
        stopSportsCar: () => void;
        startElectricCar: () => void;
        accelerateElectricCar: () => void;
        brakeElectricCar: () => void;
        chargeElectricCar: () => void;
        honkElectricCar: () => void;
        stopElectricCar: () => void;
        runUtilityDemo: () => void;
        clearUtilityResults: () => void;
        runPolymorphismDemo: () => void;
        clearPolymorphismResults: () => void;
    }
}

// Attach functions to window object
window.startRegularCar = startRegularCar;
window.accelerateRegularCar = accelerateRegularCar;
window.brakeRegularCar = brakeRegularCar;
window.honkRegularCar = honkRegularCar;
window.stopRegularCar = stopRegularCar;

window.startSportsCar = startSportsCar;
window.accelerateSportsCar = accelerateSportsCar;
window.activateTurbo = activateTurbo;
window.deactivateTurbo = deactivateTurbo;
window.brakeSportsCar = brakeSportsCar;
window.honkSportsCar = honkSportsCar;
window.stopSportsCar = stopSportsCar;

window.startElectricCar = startElectricCar;
window.accelerateElectricCar = accelerateElectricCar;
window.brakeElectricCar = brakeElectricCar;
window.chargeElectricCar = chargeElectricCar;
window.honkElectricCar = honkElectricCar;
window.stopElectricCar = stopElectricCar;

window.runUtilityDemo = runUtilityDemo;
window.clearUtilityResults = clearUtilityResults;
window.runPolymorphismDemo = runPolymorphismDemo;
window.clearPolymorphismResults = clearPolymorphismResults;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCars();
    console.log('🚗 TypeScript Car Example Web Interface Ready! 🚗');
});