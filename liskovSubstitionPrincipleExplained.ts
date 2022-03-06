class Bird {
  fly(speed: number): string{
    return `Flying at ${speed} km/h`;
  }
}

class Eagle extends Bird {
  dive(speed: number): string {
    return `Diving through the ocean at ${speed}`;
  }

  fly(speed): string {
    return `Soaring through the sky at ${speed}`;
  }
}

// Example of LSP Violation:
class Chicken extends Bird {
  fly(): Error {
    return new Error("I cant fly");
  }
}