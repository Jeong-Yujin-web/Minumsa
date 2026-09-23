import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
// import GnbLink from './components/GnbLink';

import { IoClose } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
import { ImBin } from "react-icons/im";

import {
  deleteItem,
  addCount,
  subCount
} from '../slices/cartSlice.js';

import Table from 'react-bootstrap/Table';

const Wrapper = styled.div`
  width: 1310px;
  margin: 0 auto;
`;
const CartTable = styled(Table)`
  width: 1310px;
  table-layout: fixed;
  tbody {
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
  td:first-child {
    width: 60%;
  }
  td:last-child {
    width: 40%;
  }
`;
const Whole= styled.div`
  width: 1310px;
  display:flex;
  background-color: #f7f7f7;
  padding: 10px;
  justify-content: space-between;
  aling-item: center;
  margin-bottom: 10px;
  .whole_left{
    display: flex;
    align-items: center;
    label{
      color:#999;
      background-color:#f7f7f7;
      margin-left:5px;
      &:hover{
        color: #6287E5;
        }
        }
        }
        .whole_right{
          display: flex;
          gap: 5px;
          button{
            display:flex;
            width:35px; height:35px;
            align-items: center;
            justify-content: center;
            border:1px solid #ccc;
            border-radius: 10px;
            svg{
              fill:#ccc;
              }
      &:hover{
        border-color: #6287E5;
        svg{
          fill:#6287E5;
          }
          }
          } 
          .wishLink{
            display:flex;
            align-items: center;
      background-color:#f7f7f7;
      color:#999;
      &:hover{
        color: #6287E5;
      }
      }
      }
      `
const Cart_box = styled.div`
  padding:30px;
  display:flex;
  align-items: flex-start;
  div{
    img{
      width: 100px;
      margin-right:100px;
    }
  }
`
const Cart_info = styled.div`
  p{
    text-align:left;
    }
    div{
      display:flex;
      margin-top:10px;
      p{
        font-size:0.8rem;
        font-weight:bold;
        margin-right: 5px;
      }
      span{
        font-size:0.8rem;
        font-weight:light;
        margin-right: 5px;
      }    
    }
    div:nth-child(4){
      .title_color{
        font-weight:bold;
        margin-left:0;
      }
    }
    div:last-child{
      text-align: center;
      align-items: center;
      .cart_count_btn{
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color:#fff;
        padding:0;
        margin-right: 10px;
        p{
          display:flex;
          text-align: center;
          align-items: center;
        }
        margin-top:0;
        button{
          margin: 0 5px;
          background-color:#fff;
          font-weight:bold;
          border:none;
          &:hover{
            color:#6287E5;
          }
        }
      }
    }
  `
const Cart_deilivery = styled.div`
  padding:30px;
`
const Delete = styled.button`
  position: absolute;
  top: 30px; right: 30px;
  text-align: center;
  display:flex;
  font-size: 1.2rem;
  border:none;
  background-color: #fff;
  &:hover{
    svg{
      fill:#6287E5;
    }
  }
`
const Fix_box = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  border-top: 1px solid #6287E5;
`;

const Fix_inner = styled.div`
  width: 1310px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  box-sizing: border-box;
  font-size: 0.8rem;
  .total_outer{
    width: 40%;
    div{
      display:flex;
      justify-content:space-between;
      p:last-child{
        color:#999;
      }
    }
    .total_discount{
     p:last-child{
       color:#6287E5;
     }
    }
  }
  .btn_box{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    p:last-child{
      font-size: 0.9rem;
    }
    p:first-child{
    display:flex;
    align-items: center;
    }
    button{
      margin-top:10px;
      margin-right: 0; 
      flex: none;
    }
  }
`;

export default function Cart() {  

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState([]);
  const handleAllCheck = (e) => {
    if (e.target.checked) {
      setSelectedIds(cart.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };
  const handleCheck = (id) =>{
    setSelectedIds((prev)=>{
      const next=new Set(prev)
      if (next.has(id)){
        next.delete(id);
      }else{
        next.add(id);
      }
      return next; 
    })
  };
  const totalCount = cart.reduce((total, item) => {
    return total + item.count;
  }, 0);
  const totalOriginalPrice = cart.reduce((total, item) => {
    return total + item.price * item.count;
  }, 0);
  const totalDiscount = cart.reduce((total, item) => {
    const discount = item.price * (item.discountRate / 100);
    return total + discount * item.count;
  }, 0);
  const totalPrice = cart.reduce((total, item) => {
    const discountPrice =
      item.price * (1 - item.discountRate / 100);
    return total + discountPrice * item.count;
  }, 0);
  const totalPoint = cart.reduce((total, item) => {
    return total + item.price * 0.05 * item.count;
  }, 0);

  return (
    <Wrapper>
      <p className='title'>{user.name ? `${user.name}님의 장바구니` : '장바구니'}</p>
      <Whole>
        <div className="whole_left">
          <input 
            type="checkbox"
            id="whole"
            checked={cart.length > 0 && selectedIds.length === cart.length}
            onChange={handleAllCheck}/>
          <label htmlFor="whole"> 전체선택 </label>
        </div>
        <div className="whole_right">
          <button><ImBin /></button>
          <button><GoHeartFill/></button>
          <Link to='/Wish' className='wishLink'>찜 목록</Link>
        </div>
      </Whole>
      <CartTable>
        <tbody>
          {
            cart.map((item, i) => {
              return (
                <tr key={i}>
                  <td style={{borderRight: '1px dashed #ccc'}}>
                    <Cart_box>
                      <input 
                        type="checkbox"
                        style={{ marginRight: '50px' }}
                        checked={selectedIds.includes(item.id)}
                        onChange={() => handleCheck(item.id)}/>
                      <div>
                        <img src={process.env.PUBLIC_URL + item.image} alt='찜 이미지' />
                      </div>
                      <Cart_info>
                        <p style={{fontWeight:'bold'}}>{item.title}</p>
                        <div>
                          <p style={{marginRight:'5px'}}>시리즈</p>
                          <span>{item.category}</span>
                          <span>|</span>
                          <p>글</p>
                          <span>{item.author}</span>
                        </div>
                        <div>
                          <p style={{marginRight:'5px'}}>출판사</p>
                          <span>{item.publisher}</span>
                          <span>|</span>
                          <p>발행일</p>
                          <span>{item.publishDate}</span>
                        </div>
                        <div>
                          <span className='title_color'>
                            {item.discountRate}%
                          </span>
                          <p style={{fontSize:'1.0rem'}}>
                            {(item.price * (1 - item.discountRate / 100)).toLocaleString()}원
                          </p>
                          <p style={{textDecoration: 'line-through', color: '#ccc', fontSize:'0.9rem'}}>{item.price}원</p>
                        </div>
                        <div>
                          <div className="cart_count_btn">
                            <button onClick={() => dispatch(addCount(item.id))}>
                              +
                            </button>
                            <p>{item.count}</p>
                            <button onClick={() => dispatch(subCount(item.id))}>
                              -
                            </button>
                          </div>
                          <p style={{fontSize:'1.2rem', color:'#999'}}>{(item.price*(1 - item.discountRate / 100)*item.count).toLocaleString()}원</p>
                        </div>
                      </Cart_info>
                    </Cart_box>
                  </td>
                  <td style={{position: 'relative', textAlign:'center', verticalAlign:'middle'}}>
                    <Cart_deilivery>
                      <p>9월 28일 도착 예정</p>
                    </Cart_deilivery>
                    <Delete onClick={() => dispatch(deleteItem(item.id))}>
                      <IoClose />
                    </Delete>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </CartTable>
      <Fix_box>
        <Fix_inner>
          <div className="total_count">
            총
            <p className='title_color'>
              {totalCount}개
            </p>
          </div>
          <div className="total_outer">
            <div className="origin_price">
              <p>상품금액</p>
              <p>
                {totalOriginalPrice.toLocaleString()}원
              </p>
            </div>
            <div className="deiliver_fee">
              <p>배송비</p>
              <p>
                + 0 원
              </p>
            </div>
            <div className="total_discount">
              <p>상품 할인</p>
              <p style={{marginRight:'0'}}>
                - {totalDiscount.toLocaleString()}원
              </p>
            </div>
            <div className="total_deilfee">
              <p>적립 예정 포인트</p>
              <p>
                + {totalPoint.toLocaleString()}P
              </p>
            </div>
          </div>
          <div className="btn_box">
            <div className="total_price">
              <p>총 결제 예정 금액</p>
              <p>
                {totalPrice.toLocaleString()}원
              </p>
            </div>
            <button className='btn_submit'>
              결제하기
            </button>
          </div>
        </Fix_inner>
      </Fix_box>
    </Wrapper>
  )
}
