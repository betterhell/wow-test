export interface Ship {
  description: string;
  icons: {
    large: string;
    medium: string;
  };
  level: number;
  nation: {
    name: string;
    title: string;
    color: string;
    icons: {
      small: string;
      medium: null;
      large: string;
    };
  };
  name: string;
  title: string;
  type: {
    name: string;
    title: string;
    icons: {
      default: string;
    };
  };
}
