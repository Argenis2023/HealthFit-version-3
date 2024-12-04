export interface Clima {
    location: {
      name: string;
    };
    current: {
      temp_c: number;
      wind_kph: number;
      condition: {
        text: string;
        icon: string;
      };
    };
  }