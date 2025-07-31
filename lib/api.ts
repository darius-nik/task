import { ApiResponse, User } from '@/types';

const API_BASE_URL = 'https://randomuser.me/api';

export const fetchRandomUser = async (): Promise<User> => {
  try {
    const response = await fetch(`${API_BASE_URL}/?results=1&nat=us`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data: ApiResponse = await response.json();
    
    if (!data.results || data.results.length === 0) {
      throw new Error('No user data received from API');
    }
    
    return data.results[0];
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data. Please try again.');
  }
}; 