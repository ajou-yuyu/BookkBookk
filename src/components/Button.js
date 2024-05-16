import React from 'react';

const Button = ({ onClick, disabled, children }) => (
  <Button
    onClick={onClick}
    style={{
      background: '#D1BB9E',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '16px',
      padding: '10px 20px',
      fonSize: '32px',
      cursor: 'pointer',
      border: '1px black solid',
      ß


    }}
  >
    {children}
  </Button >
);

export default Button;

{/* <div style="width: 100%; height: 100%; ;  border: 1px black solid"></div> */ }