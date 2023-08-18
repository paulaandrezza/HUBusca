import axios from 'axios';
import { IUser } from '../interfaces/User';

export async function getUserProfile(username: string): Promise<IUser | null> {
  try {
    const response = await axios.get<IUser>(
      `https://api.github.com/users/${username}`
    );

    const {
      id,
      avatar_url,
      login,
      name,
      location,
      url,
      blog,
      bio,
      followers,
      following,
      public_repos,
    } = response.data;

    const user: IUser = {
      id,
      avatar_url,
      login,
      name,
      location,
      url,
      blog,
      bio,
      followers,
      following,
      public_repos,
      repos: [],
    };

    return user;
  } catch (err) {
    console.error('Error searching GitHub user:', err);
    return null;
  }
}
