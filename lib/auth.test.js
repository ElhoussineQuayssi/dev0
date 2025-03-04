import { authOptions } from './auth';
import { db } from './db';

describe('Authentication', () => {
  it('should return user object for valid credentials', async () => {
    const credentials = { username: 'admin', password: 'admin123' }; // Use valid test credentials
    const user = await authOptions.providers[0].authorize(credentials);
    expect(user).toBeDefined();
    expect(user.name).toBe('Admin');
  });

  it('should return null for invalid credentials', async () => {
    const credentials = { username: 'invalid', password: 'wrongpassword' };
    const user = await authOptions.providers[0].authorize(credentials);
    expect(user).toBeNull();
  });
});
