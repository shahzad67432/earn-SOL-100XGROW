import React, { forwardRef, ButtonHTMLAttributes, InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes } from 'react';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        className={`w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </select>
    );
  }
);

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
TextArea.displayName = 'TextArea';
Select.displayName = 'Select';
Button.displayName = 'Button';