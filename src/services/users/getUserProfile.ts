import axios from 'axios';
import { IUser } from '../interfaces/User';

export async function getUserProfile(username: string): Promise<IUser | null> {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const user: IUser = response.data;
    return user;
  } catch (err) {
    console.error('Error searching GitHub user:', err);
    return null;
  }
}
