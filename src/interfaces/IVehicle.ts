// Base Vehicle interface
export interface IVehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
  stop(): void;
  getInfo(): string;
}

// Engine interface
export interface IEngine {
  type: string;
  horsepower: number;
  cylinders: number;
  start(): void;
  stop(): void;
  getEngineInfo(): string;
}