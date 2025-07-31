import React from 'react';
import { ButtonProps } from '@/types';
import styles from './Button.module.scss';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  variant = 'primary',
  size = 'md',
  className,
}) => {
  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled || loading ? styles.disabled : '',
    className || '',
  ].join(' ');

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {loading && (
        <div className={styles.spinner}>
          <div className={styles.spinnerInner}></div>
        </div>
      )}
      <span className={loading ? styles.hidden : ''}>
        {children}
      </span>
    </button>
  );
};

export default Button; 