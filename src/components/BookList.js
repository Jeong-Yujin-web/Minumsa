import './BookList.css';
import '../styles/common.css';
// import React from 'react'
import bookData from '../data/books';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/store';

import{Link, useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

export default function BookList() {
  const {type}=useParams();
  const dispatch = useDispatch();
  const books=bookData.filter((book)=> book[type] === true);
  const titleMap = {
    isNew: '신간 도서',
    isBest: '베스트 도서',
    isRecommend: '추천 도서',
    isSecond: '중고 도서',
    isElectron: '전자 도서',
  };
  return (
    <div>
      <div className="title">
      <p>분야별</p>
      <p className='title_color'>{titleMap[type]}</p>
      </div>
      <Container fluid className='book_outer'>
        <Row>
          {
            books.map((book)=>{
              return(
                <Col md={6} key={book.id} className='book_inner'>
                  <Link to={`/book/${book.category}/${book.id}`}  >
                  <div className="book_left">
                    <div className="book_img">
                      <img src={`${process.env.PUBLIC_URL}${book.image}`} alt="도서 상품" />
                    </div>
                    <div className="book_shadow">
                      <img src={process.env.PUBLIC_URL + '/images/any/shadow.png'} alt="상품 그림자" />
                    </div>
                  </div>
                  <div className="book_right">
                    <p className='bookTitle'>{book.title}</p>
                    <div className="text">
                      <p>시리즈</p>
                      <p> {book.category}</p>
                      <p>|</p>
                      <p>글</p>
                      <p> {book.author}</p>
                    </div>
                    <div className="text">
                      <p>출판사</p>
                      <p>{book.publisher}</p>
                      <p>|</p>
                      <p>출판일</p>
                      <p>{book.publishDate}</p>
                    </div>
                    <div className="text">
                      <FaStar className='icon'/>
                      <p>{book.rating}</p>
                    </div>
                  </div>
                  </Link>
                  <div className="btn_box booklist_btn">
                    <button onClick={()=> dispatch(addItem({
                    id: book.id,
                    title: book.title,
                    price: book.price,
                    discountRate: book.discountRate,
                    count: 1}))}>장바구니</button>
                    <button>바로구매</button>
                    <button className='heart_btn'><GoHeart /></button>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}
