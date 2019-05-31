import React from 'react';

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ol className="list-group" >{children}
      </ol>

    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">
    {children}</li>
}
