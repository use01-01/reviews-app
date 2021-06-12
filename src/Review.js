import React, { useState, useEffect } from 'react';

const Review = ({ items }) => {
  const [indexPerson, setIndexPerson] = useState(0);

  useEffect(() => {
    if (indexPerson > items.length - 1) {
      setIndexPerson(0);
    } else if (indexPerson < 0) {
      setIndexPerson(items.length - 1);
    }
  }, [indexPerson]);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div>
      {items.map((item, index) => {
        const { id, name, job, image, text } = item;
        return (
          <div>
            {index === indexPerson && (
              <div>
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                  }}
                />
                <h4>{index}</h4>
              </div>
            )}
          </div>
        );
      })}
      <button onClick={() => setIndexPerson(indexPerson - 1)}>previous</button>
      <button onClick={() => setIndexPerson(indexPerson + 1)}>next</button>
      <button onClick={() => setIndexPerson(getRandomInt(0, 3))}>
        random person
      </button>
    </div>
  );
};

export default Review;
