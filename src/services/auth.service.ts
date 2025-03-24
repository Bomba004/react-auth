import axios from 'axios';
import { LoginCredentials, RegisterData, User } from '../types/auth.types';

const API_URL = 'http://localhost:3001';

interface UserWithPassword extends User {
  password: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<User> {
    try {
      const response = await axios.get(`${API_URL}/users`);
      const users: UserWithPassword[] = response.data;
      
      const user = users.find(
        (u) => 
          (u.email === credentials.identifier || u.username === credentials.identifier) && 
          u.password === credentials.password
      );

      if (!user) {
        throw new Error('Invalid credentials');
      }

      // Remove password from user object before returning
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch (error) {
      throw new Error('Login failed');
    }
  },

  async register(data: RegisterData): Promise<User> {
    const existingUser = await axios.get(`${API_URL}/users?email=${data.email}`);
    
    if (existingUser.data.length > 0) {
      throw new Error('User already exists');
    }

    const newUser = {
      ...data,
      id: Date.now(),
      role: 'user',
      permissions: ['read']
    };

    const response = await axios.post(`${API_URL}/users`, newUser);
    return response.data;
  },

  async getCurrentUser(): Promise<User | null> {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const { id } = JSON.parse(atob(token));
      const response = await axios.get(`${API_URL}/users/${id}`);
      const user = response.data;
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } catch {
      return null;
    }
  }
};
