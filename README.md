# TypeScript Car Example 🚗

A comprehensive TypeScript project demonstrating Object-Oriented Programming (OOP) concepts using car examples.

## Features

- **Object-Oriented Design**: Demonstrates inheritance, polymorphism, encapsulation, and abstraction
- **Multiple Car Types**: Regular cars, sports cars, and electric cars
- **Type Safety**: Full TypeScript implementation with interfaces and enums
- **Factory Pattern**: Car creation using the factory design pattern
- **Utility Functions**: Helper functions for calculations and conversions

## Project Structure

```
src/
├── enums/
│   └── CarEnums.ts          # Enums for fuel types, colors, and transmissions
├── interfaces/
│   └── IVehicle.ts          # Vehicle and engine interfaces
├── models/
│   ├── Engine.ts            # Engine class
│   ├── Vehicle.ts           # Abstract base vehicle class
│   ├── Car.ts               # Regular car implementation
│   ├── SportsCar.ts         # Sports car with turbo features
│   └── ElectricCar.ts       # Electric car with battery management
├── factories/
│   └── CarFactory.ts        # Factory for creating different car types
├── utils/
│   └── CarUtils.ts          # Utility functions for calculations
└── index.ts                 # Main demo application
```

## Classes and Concepts

### 1. **Engine Class**
- Manages engine properties (type, horsepower, cylinders)
- Handles engine start/stop functionality
- Provides engine information

### 2. **Vehicle Abstract Class**
- Base class for all vehicles
- Implements common vehicle behavior
- Defines abstract methods for subclasses

### 3. **Car Class**
- Extends Vehicle class
- Implements basic car functionality
- Handles acceleration, braking, and honking

### 4. **SportsCar Class**
- Extends Car class
- Adds turbo functionality
- Enhanced acceleration capabilities

### 5. **ElectricCar Class**
- Extends Car class
- Battery management system
- Charging functionality and range calculation

### 6. **Factory Pattern**
- `CarFactory` class for creating different car types
- Simplifies object creation process

### 7. **Utility Functions**
- Unit conversions (miles/km, mph/kmh)
- Fuel efficiency calculations
- Car age and depreciation calculations

## Installation and Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Development mode (with ts-node):**
   ```bash
   npm run dev
   ```

5. **Watch mode (auto-compile on changes):**
   ```bash
   npm run watch
   ```

## Usage Example

```typescript
import { CarFactory } from './factories/CarFactory';
import { Engine } from './models/Engine';
import { FuelType, CarColor, TransmissionType } from './enums/CarEnums';

// Create an engine
const v6Engine = new Engine("V6", 280, 6);

// Create a regular car
const myCar = CarFactory.createRegularCar(
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

// Use the car
myCar.start();
myCar.accelerate(50);
myCar.honk();
myCar.stop();
```

## Key OOP Concepts Demonstrated

1. **Inheritance**: SportsCar and ElectricCar inherit from Car, which inherits from Vehicle
2. **Polymorphism**: Different car types can be treated as Car objects
3. **Encapsulation**: Private and protected members control access to internal state
4. **Abstraction**: Abstract Vehicle class defines common interface
5. **Interfaces**: IVehicle and IEngine define contracts for implementations
6. **Factory Pattern**: CarFactory encapsulates object creation logic

## TypeScript Features Used

- **Classes and Inheritance**
- **Interfaces**
- **Enums**
- **Access Modifiers** (public, private, protected)
- **Abstract Classes**
- **Type Annotations**
- **Generic Types** (where applicable)

## Output Example

When you run the application, you'll see a demonstration of:
- Creating different types of cars
- Starting, accelerating, and stopping cars
- Sports car turbo functionality
- Electric car charging and battery management
- Utility function demonstrations
- Polymorphism with an array of different car types

## License

MIT License - Feel free to use this code for learning and educational purposes!

---

This example provides a solid foundation for understanding TypeScript and Object-Oriented Programming concepts in a practical, easy-to-understand context. 🚗💨