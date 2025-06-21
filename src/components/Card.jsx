import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  hover = false,
  ...props 
}) => {
  const baseClasses = 'card';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  const classes = `${baseClasses} ${padding} ${hoverClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card; 