import React from 'react';

function Square({ value, onClick }) {
  return (
    <button
      style={{
        width: '60px',
        height: '60px',
        fontSize: '24px',
        textAlign: 'center',
        lineHeight: '60px',
        border: '1px solid #999',
        backgroundColor: '#fff',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
