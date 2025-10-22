import React from 'react';

interface ToastProps {
  message: string | null;
  isVisible: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div
      className={`fixed top-5 right-5 bg-brand-green text-white py-3 px-6 rounded-lg shadow-lg transform transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
      role="alert"
    >
      <p>{message}</p>
    </div>
  );
};

export default Toast;