import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'py-2 px-4 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-300';
  
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400',
    danger: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-500',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${disabled ? disabledStyles : ''} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;