import React from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import BookSection from '../components/BookSection';

const SliderContainer = styled.div`
  position: relative;
  .slick-slide {
    margin: 30px 0;
    padding: 0 10px;
    transition: all 0.3s ease;
    opacity: 0.4;
  }
  .slick-slide img {
    border-radius: 20px;
  }
  .slick-current.slick-active {
    opacity: 1;
  }
  .slick-prev, .slick-next {
    width: 40px !important;
    height: 40px !important;
    opacity:0.8;
    background-color: #ccc !important; 
    border-radius: 10px !important;
    z-index: 10;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    transition: all 0.2s ease;
    margin: 0 50px;  
    &:hover {
      background-color: #999 !important;
      transform: translateY(-50%) scale(1.05);
    }
  }

  .slick-prev:before, .slick-next:before {
    display: none !important;
  }
  .slick-arrow .react-icon {
    fill: #fff !important;
    font-size: 20px !important; 
    display: block;
    transition: color 0.2s ease;
  }

  .slick-prev:hover .react-icon,
  .slick-next:hover .react-icon {
    fill: #fff !important;
  }

  .slick-dots li button:before {
    color: #ccc !important;
    font-size: 10px !important;
  }
  .slick-dots li.slick-active button:before {
    color: #6287E5 !important;
  }
`;

const SlideInner = styled.div`
  img {
    width: 100%;
    display: block;
  }
`;
const NextArrow = ({ className, onClick }) => {
  return (
    <button className={`${className} custom-slick-next`} onClick={onClick} type="button">
      <FaAngleRight className="react-icon" />
    </button>
  );
};

const PrevArrow = ({ className, onClick }) => {
  return (
    <button className={`${className} custom-slick-prev`} onClick={onClick} type="button">
      <FaAngleLeft className="react-icon" />
    </button>
  );
};

export default function Home() {
  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner01.jpg'} alt="배너이미지01" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner02.jpg'} alt="배너이미지02" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner03.jpg'} alt="배너이미지03" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner04.jpg'} alt="배너이미지04" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner05.jpg'} alt="배너이미지05" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner06.jpg'} alt="배너이미지06" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner07.jpg'} alt="배너이미지07" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner08.jpg'} alt="배너이미지08" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner09.jpg'} alt="배너이미지09" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner10.jpg'} alt="배너이미지10" />
        </SlideInner>
        <SlideInner>
          <img src={process.env.PUBLIC_URL + '/images/banners/banner12.jpg'} alt="배너이미지12" />
        </SlideInner>
      </Slider>

      <Link to={'/book/isNew'}>
        <div className="title" style={{ marginTop: '100px' }}>
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
      <BookSection type="isBest" isBest />
      <Link to={'/book/isRecommend'}>
        <div className="title">
          <p className='title_color'>민음사 추천</p>
          <p>북로그&북캐스트</p>
        </div>
      </Link>
      <BookSection type="isRecommend" />
    </SliderContainer>
  );
}
