export interface IRepositorie {
  id: number;
  name: string;
  html_url: string;
  homepage: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  languages: {
    [language: string]: number;
  };
}
