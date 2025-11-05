export class CarUtils {
  public static calculateFuelEfficiency(distance: number, fuelConsumed: number): number {
    if (fuelConsumed === 0) return 0;
    return Number((distance / fuelConsumed).toFixed(2));
  }

  public static convertMilesToKm(miles: number): number {
    return Number((miles * 1.60934).toFixed(2));
  }

  public static convertKmToMiles(km: number): number {
    return Number((km / 1.60934).toFixed(2));
  }

  public static convertMphToKmh(mph: number): number {
    return Number((mph * 1.60934).toFixed(2));
  }

  public static convertKmhToMph(kmh: number): number {
    return Number((kmh / 1.60934).toFixed(2));
  }

  public static formatCarAge(year: number): string {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    
    if (age === 0) return "Brand new";
    if (age === 1) return "1 year old";
    return `${age} years old`;
  }

  public static isVintage(year: number): boolean {
    const currentYear = new Date().getFullYear();
    return (currentYear - year) >= 25;
  }

  public static calculateDepreciation(originalPrice: number, year: number, depreciationRate: number = 0.15): number {
    const currentYear = new Date().getFullYear();
    const age = currentYear - year;
    const currentValue = originalPrice * Math.pow(1 - depreciationRate, age);
    return Number(Math.max(currentValue, originalPrice * 0.1).toFixed(2)); // Minimum 10% of original value
  }
}