'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Button from '@/components/ui/Button';
import ThemeToggle from '@/components/ui/ThemeToggle';
import styles from './page.module.scss';

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const { user, isAuthenticated, isLoading, logout } = useAuth();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push('/auth');
    }
  }, [isLoading, isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push('/auth');
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading your dashboard...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Will redirect to auth page
  }

  return (
    <div className={styles.container}>
      {/* Theme Toggle */}
      <div className={styles.themeToggleContainer}>
        <ThemeToggle />
      </div>

      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <Button
            onClick={() => router.back()}
            variant="outline"
            size="sm"
            className={styles.backButton}
          >
            ←
          </Button>
          <Button
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className={styles.logoutButton}
          >
            Logout
          </Button>
        </div>
        <div className={styles.headerRight}>
          <div className={styles.welcomeText}>
            <h1 className={styles.welcomeTitle}>Welcome!</h1>
            <p className={styles.welcomeSubtitle}>Welcome to your dashboard</p>
          </div>
        </div>
      </div>

      <div className={styles.content}>
        {/* User Profile Card */}
        <div className={`${styles.userCard} glass`}>
          <div className={styles.userInfo}>
            <h2 className={styles.userName}>
              {user?.name?.first} {user?.name?.last}
            </h2>
            <p className={styles.userTitle}>
              {user?.name?.title} • {user?.nat}
            </p>
            <p className={styles.userEmail}>
              📧 {user?.email}
            </p>
            <p className={styles.userLocation}>
              📍 {user?.location?.city}, {user?.location?.country}
            </p>
            <div className={styles.userDetails}>
              <span className={styles.userDetail}>
                📞 {user?.phone}
              </span>
              <span className={styles.userDetail}>
                🎂 Age: {user?.dob?.age} years
              </span>
            </div>
          </div>
          <div className={styles.userAvatar}>
            <img
              src={user?.picture?.large}
              alt={`${user?.name?.first} ${user?.name?.last}`}
              className={styles.avatar}
            />
            <div className={styles.onlineIndicator}></div>
          </div>
        </div>

        {/* Information Cards Grid */}
        <div className={styles.infoGrid}>
          <div className={`${styles.infoCard} glass`}>
            <div className={styles.cardIcon}>📅</div>
            <h3 className={styles.cardTitle}>Registration Date</h3>
            <p className={styles.cardValue}>
              {new Date(user?.registered?.date || '').toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </p>
          </div>

          <div className={`${styles.infoCard} glass`}>
            <div className={styles.cardIcon}>🏠</div>
            <h3 className={styles.cardTitle}>Location</h3>
            <p className={styles.cardValue}>
              {user?.location?.street?.number} {user?.location?.street?.name}
            </p>
          </div>

          <div className={`${styles.infoCard} glass`}>
            <div className={styles.cardIcon}>👤</div>
            <h3 className={styles.cardTitle}>Personal Information</h3>
            <p className={styles.cardValue}>
              Username: {user?.login?.username}
            </p>
          </div>

          <div className={`${styles.infoCard} glass`}>
            <div className={styles.cardIcon}>🌍</div>
            <h3 className={styles.cardTitle}>Time Zone</h3>
            <p className={styles.cardValue}>
              {user?.location?.timezone?.description}
            </p>
          </div>

          <div className={`${styles.infoCard} glass`}>
            <div className={styles.cardIcon}>🆔</div>
            <h3 className={styles.cardTitle}>Additional Information</h3>
            <p className={styles.cardValue}>
              User ID: {user?.id?.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage; 