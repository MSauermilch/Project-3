import React from 'react';

function Card({ children }) {
  return (
    <div class="col s12">
      <div class="card-panel teal">
        {children}
      </div>
    </div>
  )
}

export default Card;
