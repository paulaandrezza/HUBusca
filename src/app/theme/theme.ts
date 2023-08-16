interface Theme {
  colors: {
    'bg-primary': string;
    'text-primary': string;
    'text-secondary': string;
    'text-button': string;
    'button-color': string;
    'button-hover': string;
    'button-active': string;
  };
  fontSizes: {
    small: string;
    normal: string;
    medium: string;
    large: string;
    heading: string;
    subtitle: string;
    title: string;
  };
  fontWeights: {
    normal: number;
    bold: number;
    heading: number;
    subtitle: number;
  };
}

export const theme: Theme = {
  colors: {
    'bg-primary': '#DCE7FF',
    'text-primary': '#0f172a',
    'text-secondary': '#334155',
    'text-button': '#9C404D',
    'button-color': '#BDC5DF',
    'button-hover': '#D3DBF8',
    'button-active': '#E4E9FA',
  },
  fontSizes: {
    small: '0.75rem',
    normal: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
    heading: '2rem',
    subtitle: '2.5rem',
    title: '4.5rem',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
    heading: 700,
    subtitle: 600,
  },
};
