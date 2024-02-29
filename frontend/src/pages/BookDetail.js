// BookDetail.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Fetch the book details using the ID
    const getBookDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3001/book/${id}`);
        if (response.ok) {
          const data = await response.json();
          setBook(data);
        } else {
          console.error('Failed to fetch book details');
        }
      } catch (err) {
        console.error(err);
      }
    };

    getBookDetail();
  }, [id]);

  return (
    <div>
      {book ? (
        <div>
          {/* Display book details here */}
          <h2>{book.bookTitle}</h2>
          <p>{book.authorName}</p>
          {/* Add other book details you want to display */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BookDetail;
