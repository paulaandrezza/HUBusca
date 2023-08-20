import { IRepositorie } from './Repositore';

export interface IUser {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  html_url: string;
  blog: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  repos: IRepositorie[];
}
