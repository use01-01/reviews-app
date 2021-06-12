import React, { useState } from 'react';
import Review from './Review';
import reviews from './data';

function App() {
  const [items, setItems] = useState(reviews);
  return (
    <div>
      <Review items={items} />
    </div>
  );
}

export default App;
