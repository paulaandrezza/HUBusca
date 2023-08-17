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
    title: string;
  };
  fontWeights: {
    normal: number;
    bold: number;
    heading: number;
    subtitle: number;
  };
  borderRadius: {
    button: string;
    card: string;
  };
  languageColor: {
    [language: string]: string;
  };
}

export const theme: Theme = {
  colors: {
    'bg-primary': '#EAF2FF',
    'text-primary': '#0f172a',
    'text-secondary': '#334155',
    'text-button': '#5F2B64',
    'button-color': '#BDC5DF',
    'button-hover': '#D3DBF8',
    'button-active': '#E4E9FA',
  },
  fontSizes: {
    small: '0.75rem',
    normal: '1rem',
    medium: '1.2rem',
    title: '1.5rem',
  },
  fontWeights: {
    normal: 400,
    bold: 700,
    heading: 700,
    subtitle: 600,
  },
  borderRadius: {
    button: '6.25rem',
    card: '1rem',
  },
  languageColor: {
    JavaScript: '#6fb3d2',
    Python: '#9bcbaf',
    Java: '#d1b2e2',
    Ruby: '#e8b9bf',
    PHP: '#f2d3ae',
    C: '#a9c9b1',
    'C++': '#cfc0bd',
    CSS: '#d6c9e2',
    HTML: '#aecdc4',
    Swift: '#c6c6c6',
    TypeScript: '#4d97c3',
    Go: '#6b6740',
    Kotlin: '#f38847',
    Rust: '#dea584',
    Shell: '#89e051',
    Vue: '#41b883',
    Dart: '#00b4ab',
    Scala: '#c22d40',
    Perl: '#0298c3',
    Lua: '#000080',
    Haskell: '#5e5086',
    Arduino: '#bd79d1',
    Matlab: '#e16737',
    'Objective-C': '#438eff',
    Groovy: '#e69f56',
    PowerShell: '#012456',
    R: '#198ce7',
    TeX: '#3d6117',
    'Vim script': '#199f4b',
    CoffeeScript: '#244776',
    Ada: '#02f88c',
    Assembly: '#6e4c13',
    OCaml: '#3be133',
    Elixir: '#6e4a7e',
    'Jupyter Notebook': '#da5b0b',
  },
};
