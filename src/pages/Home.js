// import React from 'react'
// import BookSections from './BookSection';
import { Link } from 'react-router-dom';
import {Carousel} from 'react-bootstrap';
import BookSection from '../components/BookSection';


export default function Home() {
  return (
    <div>
      <Carousel style={{width:'1280px', margin:'0 auto'}}>
        <Carousel.Item interval={3000} >
          <img src={process.env.PUBLIC_URL + '/images/banners/mainbanner01.jpg'} text="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img src={process.env.PUBLIC_URL + '/images/banners/mainbanner02.jpg'} text="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/images/banners/mainbanner03.jpg'}  text="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Link to={'/book/isNew'}>
        <div className="title">
          <p>분야별</p>
          <p className='title_color'>신간 도서</p>
        </div>
      </Link>
      <BookSection type="isNew" />
        <Link to={'/book/isBest'}>
          <div className="title">
            <p>베스트셀러</p>
            <p className='title_color'>TOP 20</p>
          </div>
        </Link>
      <BookSection type="isBest" isBest/>
        <Link to={'/book/isRecommend'}>
          <div className="title">
            <p className='title_color'>민음사 추천</p>
            <p>북로그&북캐스트</p>
          </div>
        </Link>
      <BookSection type="isRecommend" />
    </div>
  )
}