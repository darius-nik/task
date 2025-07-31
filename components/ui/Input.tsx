import React, { forwardRef } from 'react';
import { InputProps } from '@/types';
import styles from './Input.module.scss';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, name, type = 'text', placeholder, value, onChange, onBlur, error, disabled, className }, ref) => {
    return (
      <div className={`${styles.inputWrapper} ${className || ''}`}>
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className={`${styles.input} ${error ? styles.error : ''} ${disabled ? styles.disabled : ''}`}
        />
        {error && (
          <span className={styles.errorMessage}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 