'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { authSchema, type AuthFormData } from '@/lib/validation';
import { fetchRandomUser } from '@/lib/api';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import styles from './page.module.scss';

const AuthPage: React.FC = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState<AuthFormData>({
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<Partial<AuthFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof AuthFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    try {
      authSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const validationErrors: Partial<AuthFormData> = {};
      error.errors?.forEach((err: any) => {
        validationErrors[err.path[0] as keyof AuthFormData] = err.message;
      });
      setErrors(validationErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const userData = await fetchRandomUser();
      login(userData);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      alert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* Theme Toggle */}
      <div className={styles.themeToggleContainer}>
        <ThemeToggle />
      </div>

      <div className={`${styles.card} glass`}>
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            <div className={styles.shieldIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" fill="url(#shield-gradient)"/>
                <defs>
                  <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#1d4ed8', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <h1 className={styles.title}>Login to System</h1>
          <p className={styles.subtitle}>
            To log in, enter your phone number
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="phoneNumber" className={styles.inputLabel}>
              Phone Number
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="09123456789"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              error={errors.phoneNumber}
            />
          </div>

          <Button
            type="submit"
            loading={isLoading}
            disabled={isLoading}
            className={styles.submitButton}
          >
            {isLoading ? 'Signing In...' : 'Login'}
          </Button>
        </form>

        <div className={styles.footer}>
          <div className={styles.featureIcons}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✨</div>
              <span>Simple</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>⚡</div>
              <span>Fast</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🔒</div>
              <span>Secure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage; 