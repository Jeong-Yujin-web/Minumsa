import '../pages/BookDetail.css';
import '../styles/common.css';

import { useParams,Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Container, Row, Col, Carousel, Tabs, Tab } from 'react-bootstrap';
import { addItem } from '../store/store';
import { useDispatch } from 'react-redux';

import { FaAngleDown } from "react-icons/fa6";
import { FaStar, FaBookmark } from "react-icons/fa";
import { GoHeart } from "react-icons/go";

import bookData from '../data/books';

export default function BookDetail() {
  const { type, id } = useParams();
  const dispatch=useDispatch();
  const BookDetail = bookData.find(
    (BookDetail) => {
      return BookDetail.id === Number(id);
    });

  const [count, setCount] = useState(1);
  const handleClick_min = () => setCount(Math.max(0, count - 1));
  const handleClick_plu = () => setCount(count + 1);

  const sectionRefs = {
    info: useRef(null),
    editor: useRef(null),
    author: useRef(null),
    reader: useRef(null),
    return: useRef(null),
  };
  const handleTabSelect = (key) => {
    sectionRefs[key]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className='Deatail_outer'>
      <div className="title">
        <p>{BookDetail.title}</p>
      </div>
      <Container>
        <Row>
          <Col md={6}>
            <div className="bookDetail_left">
              <Carousel interval={null}>
                {BookDetail.images.map((image, index) => (
                  <Carousel.Item key={index}>
                    <div className="bookDetail_img_box">
                      <img
                        src={`${process.env.PUBLIC_URL}${image}`}
                        alt={`${BookDetail.title} 상세 이미지 ${index + 1}`}
                      />
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Col>
          <Col md={6}>
            <div className="bookDetail_right">
              <div className="price_box">
                <p>{BookDetail.discountRate}%</p>
                <p className='bookTitle'>{BookDetail.price * (1 - BookDetail.discountRate / 100)}원</p>
                <p>{BookDetail.price}</p>
              </div>
              <div className="price_info_box">
                <div className="price_info">
                  <p className='bookDetailTitle'>통합포인트</p>
                  <div>
                    <p>{BookDetail.price * (0.05)}P(5% 적립)</p>
                    <p>5만원 이상 구매 시 2천원 추가 적립</p>
                  </div>
                </div>
                <div className="price_info">
                  <p className='bookDetailTitle'>결제혜택</p>
                  <div className="price_info022">
                    <p>카드/간편결제 혜택을 확인해 보세요!</p>
                    <label htmlFor="card"><FaAngleDown /></label>
                  </div>
                </div>
                <input type="checkbox" id='card' />
                <div className="card_box">
                  <div className="card_box_inner">
                    <div className="card_logo">
                      <img src={process.env.PUBLIC_URL + '/images/any/card01.png'} alt="" />
                    </div>
                    <div className="card_info">
                      <p>퀵 계좌이체</p>
                      <p>1만원 이상 결제 시 1% 즉시 할인</p>
                    </div>
                  </div>
                  <hr />
                  <div className="card_box_inner">
                    <div className="card_logo">
                      <img src={process.env.PUBLIC_URL + '/images/any/card02.png'} alt="" />
                    </div>
                    <div className="card_info">
                      <p>카카오페이</p>
                      <p>5만원 이상 결제 시 4000원 즉시 할인</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="price_info">
                <p className='bookDetailTitle'>배송비</p>
                <p>무료배송</p>
              </div>
              <div className="price_info">
                <p className='bookDetailTitle'>배송안내</p>
                <div>
                  <p>예약판매 10/30(금) 출고예정</p>
                  <p>로그인 후 정확한 배송 안내 받아보세요!</p>
                </div>
              </div>
              <hr />
              <div className="oneline_box">
                <p className='bookDetailTitle'>책 한 줄 소개</p>
                <p>{BookDetail.oneLineIntro}</p>
                <div className="oneline_review">
                  <p><FaStar /></p>
                  <p>{BookDetail.rating}</p>
                  <p>{BookDetail.reviewCount}</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="bookDetail_info_outer">
        <Tabs
          justify
          transition={false}
          onSelect={handleTabSelect}
        >
          <Tab eventKey="info" title="Info">
            <section ref={sectionRefs.info} className="detail_section">
              <p className='bookDetailTitle'>책소개</p>
              <p>{BookDetail.description}</p>
            </section>
          </Tab>
          <Tab eventKey="editor" title="Editor">
            <section ref={sectionRefs.editor} className="detail_section">
              <p className='bookDetailTitle'>■ 본문 중에서</p>
              <p>{BookDetail.editorReview}</p>
            </section>
          </Tab>
          <Tab eventKey="author" title="Author">
            <section ref={sectionRefs.author} className="detail_section">
              <p className='bookDetailTitle'>{BookDetail.author}</p>
              <p>{BookDetail.authorInfo}</p>
            </section>
          </Tab>
          <Tab eventKey="reader" title="Reader">
            <section ref={sectionRefs.reader} className="detail_section">
              <div className="review_box">
                <div className="review_title_box">
                  <p className='bookDetailTitle'>도서리뷰({BookDetail.reviewCount})</p>
                  <p>이 책을 읽고 어떤 느낌을 받으셨나요? 리뷰를 남기고 다른 독자들과 함께 공유해보세요.</p>
                  <button className='review_btn'>리뷰 작성</button>
                </div>
                <div className="review_text_box">
                  <p className='bookTitle'>총 {BookDetail.reviewCount}명의 회원님이 {BookDetail.rating}점으로 평가했어요!</p>
                  <div className="ai_box">
                    <div className="ai_title_box">
                      <p className='ai_title'><img src={process.env.PUBLIC_URL + '/images/any/ai_icon.png'} alt="" />리뷰 요약 Beta</p>
                    </div>
                    <div className="ai_text">
                      <p>{BookDetail.aiReviewTitle}</p>
                      <p>({BookDetail.aiReviewContent})</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Tab>
          <Tab eventKey="return" title="Return">
            <section ref={sectionRefs.return} className="detail_section">
              <p className='bookDetailTitle'>교환 / 반품 / 품절 안내</p>
              <p className='sub_text'>반품/교환방법</p>
              <p>마이룸 - 주문관리 - 주문/배송내역 - 주문조회 - 반품/교환 신청, [1:1 상담 - 반품/교환/환불] 또는 고객센터 (1544-1900)
              </p>
              <p>* 오픈마켓, 해외배송 주문, 기프트 주문시 [1:1 상담-반품/교환/환불] 또는 고객센터 (1544-1900)
              </p>
              <p className='sub_text'>반품/교환가능 기간</p>
              <p>변심반품의 경우 수령 후 7일 이내,</p>
              <p> 상품의 결함 및 계약내용과 다를 경우 문제점 발견 후 30일 이내
              </p>
              <p className='sub_text'>반품/교환비용</p>
              <p>변심 혹은 구매착오로 인한 반품/교환은 반송료 고객부담</p>
              <p className='sub_text'>반품/교환비용</p>
              <p>1. 소비자의 책임 있는 사유로 상품 등이 손실 또는 훼손된 경우</p>
              <p>(단지 확인을 위한 포장 훼손은 제외)</p>
              <p>2. 소비자의 사용, 포장 개봉에 의해 상품 등의 가치가 현저히 감소한 경우</p>
              <p>예: 화장품, 식품, 가전제품(악세서리 포함) 등</p>
              <p>3. 복제가 가능한 상품 등의 포장을 훼손한 경우</p>
              <p>예: 음반/DVD/비디오, 소프트웨어, 만화책, 잡지, 영상 화보집</p>
              <p>4. 소비자의 요청에 따라 개별적으로 주문 제작되는 상품의 경우 (1.해외주문도서)</p>
              <p>5. 디지털 컨텐츠인 ebook, 오디오북 등을 1회이상 ‘다운로드’를 받았거나 '바로보기'로 열람한 경우</p>
              <p>6. 시간의 경과에 의해 재판매가 곤란한 정도로 가치가 현저히 감소한 경우</p>
              <p>7. 전자상거래 등에서의 소비자보호에 관한 법률이 정하는 소비자 청약철회 제한 내용에 해당되는 경우
              </p>
              <p>8. 세트상품 일부만 반품 불가 (필요시 세트상품 반품 후 낱권 재구매)</p>
              <p>9. 기타 반품 불가 품목 - 잡지, 테이프, 대학입시자료, 사진집, 방통대 교재, 교과서, 만화, 미디어전품목, 악보집, 정부간행물, 지도, 각종 수험서, 적성검사</p>
              <p>  자료, 성경, 사전, 법령집, 지류, 필기구류, 시즌상품, 개봉한 상품 등</p>
              <p className='sub_text'>상품 품절</p>
              <p>1. 상품의 불량에 의한 교환, A/S, 환불, 품질보증 및 피해보상 등에 관한 사항은 소비자분쟁 해결 기준 (공정거래위원회 고시)에 준하여 처리됨
              </p>
              <p>2. 대금 환불 및 환불지연에 따른 배상금 지급 조건, 절차 등은 전자상거래 등에서의 소비자 보호에 관한 법률에 따라 처리함</p>
            </section>
          </Tab>
        </Tabs>

        <aside className='detail_aside'>
          <div className='detail_aside_inner'>
            <p className='bookTitle'>이 분야 추천 도서</p>
            {
              bookData
                .filter((book) =>
                  book.category === BookDetail.category &&
                  book.id !== BookDetail.id
                )
                .slice(0, 5)
                .map((book, index) => (
                  <Link
                    to={`/book/${type}/${book.id}`}
                    className="recommend_book"
                    key={book.id}
                  >
                    <div className="recommend_book" key={book.id}>
                      <span className='recommend_rank'>
                        <FaBookmark />
                        <p>
                          {index + 1}
                        </p>
                      </span>
                      <img src={process.env.PUBLIC_URL + book.image} alt="" />
                      <div className="recommend_info">
                        <p className='recommend_title'>{book.title}</p>
                        <p>저자 {book.author}</p>
                        <p>출판사 {book.publisher}</p>
                        <p>
                          <span className='title_color'>{book.discountRate}%</span>
                          {book.price * (1 - book.discountRate / 100)}원
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
            }
          </div>
        </aside>
      </div>

      <div className="fix_box">
        <div className="fix_inner">
          <div className="total_count">
            총<p className='title_color'>{count}개</p>
            상품금액
          </div>
          <div className="total_price">
            <p>
            {BookDetail.price * (1 - BookDetail.discountRate / 100) * count}
            </p>원
          </div>
          <div className="total_count_control">
            <button className='heart_btn' onClick={handleClick_min}>-</button>
            <p className='title_color'>{count}</p>
            <button className='heart_btn' onClick={handleClick_plu}>+</button>
          </div>
          <div className="btn_box">
            <button onClick={()=>dispatch(addItem({id:BookDetail.id, title:BookDetail.title, 
            price: BookDetail.price,
            discountRate: BookDetail.discountRate,count:count}))}>장바구니</button>
            <button>바로구매</button>
            <button className='heart_btn'><GoHeart /></button>
          </div>
        </div>
      </div>
    </div>
  )
}
