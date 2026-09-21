import './BookSection.css';
import '../styles/common.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import bookData from '../data/books';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { FaBookmark } from "react-icons/fa";

export default function BookSection({ type,isBest }) {
  const booksections = bookData.filter(
    (booksection) => booksection[type] === true
  );
  const [currentPage, setCurrentPage] = useState(0);
  const booksPerPage = 5;
  const startIndex = currentPage * booksPerPage;
  const currentBooks = booksections.slice(
    startIndex,
    startIndex + booksPerPage
  );
  const totalPages = Math.ceil(booksections.length / booksPerPage);

  const nextPage = () => {
    if (startIndex + booksPerPage < booksections.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div  className="book_sections">
      <ul>
        {currentBooks.map((booksection, index) => (
          <li key={booksection.id}>
            <Link
              to={`/book/${booksection.category}/${booksection.id}`}
              className="booksection_outer"
            >
              <div className="booksection_img">
                <img
                  src={`${process.env.PUBLIC_URL}${booksection.image}`}
                  alt="도서 상품"
                />
                {isBest && (
                  <div className="best_rank">
                    <FaBookmark />
                    <p>
                      {startIndex + index + 1}
                    </p>
                  </div>
                )}
              </div>
              <div className="booksection_text">
                <p>{booksection.title}</p>
                <p>글 {booksection.author}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="slider_control">
        <button onClick={prevPage} className="prev_btn">
          <IoIosArrowBack />
        </button>
        <div className="page_btn">
          <p>{currentPage + 1}</p>
          <p>/</p>
          <p>{totalPages}</p>
        </div>
        <button onClick={nextPage} className="next_btn">
          <IoIosArrowForward />
        </button>
      </div>
      {isBest && (
        <div className="bg">
        </div>
      )}
    </div>
  );
}