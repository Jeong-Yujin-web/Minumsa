import { useState } from 'react'

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";

import { FaShoppingCart }from 'react-icons/fa';
import { ImBin } from "react-icons/im";

import {
  deleteWish
} from '../slices/wishSlice.js';

import Table from 'react-bootstrap/Table';

const Wrapper = styled.div`
  width: 1310px;
  margin: 0 auto;
`;
const WishTable = styled(Table)`
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
  align-items: center;
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
          .cartLink{
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
const Wish_box = styled.div`
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
const Wish_info = styled.div`
  margin: auto 0;
  p{text-align:left;}
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
`
const Wish_deilivery = styled.div`
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

export default function Wish() {
  const user = useSelector((state) => state.user);
  const wish = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  const [selectedIds, setSelectedIds] = useState([]);
  const handleAllCheck = (e) => {
    if (e.target.checked) {
      setSelectedIds(wish.map((item) => item.id));
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
  return (
    <Wrapper>
      <p className='title'>{user.name ? `${user.name}님의 찜 목록` : '찜 목록'}</p>
      <Whole>
        <div className="whole_left">
          <input 
            type="checkbox"
            id="whole"
            checked={wish.length > 0 && selectedIds.length === wish.length}
            onChange={handleAllCheck}
          />
          <label htmlFor="whole"> 전체선택 </label>
        </div>
        <div className="whole_right">
          <button><ImBin /></button>
          <button><FaShoppingCart/></button>
          <Link to='/Cart' className='cartLink'>장바구니</Link>
        </div>
      </Whole>
      <WishTable>
        <tbody>
          {
            wish.map((wish, w) => {
              return (
                <tr key={w}>
                  <td style={{borderRight: '1px dashed #ccc'}}>
                    <Wish_box>
                      <input 
                        type="checkbox"
                        style={{ marginRight: '50px' }}
                        checked={selectedIds.includes(wish.id)}
                        onChange={() => handleCheck(wish.id)}
                      />
                      <div>
                        <img src={process.env.PUBLIC_URL + wish.image} alt='찜 이미지' />
                      </div>
                      <Wish_info>
                        <p style={{fontWeight:'bold'}}>{wish.title}</p>
                        <div>
                          <p style={{marginRight:'5px'}}>시리즈</p>
                          <span>{wish.category}</span>
                          <span>|</span>
                          <p>글</p>
                          <span>{wish.author}</span>
                        </div>
                        <div>
                          <p style={{marginRight:'5px'}}>출판사</p>
                          <span>{wish.publisher}</span>
                          <span>|</span>
                          <p>발행일</p>
                          <span>{wish.publishDate}</span>
                        </div>
                        <div>
                          <span className='title_color' style={{alignItems:'flex-start'}}>
                            {wish.discountRate}%
                          </span>
                          <p style={{fontSize:'1.0rem'}}>
                            {(wish.price * (1 - wish.discountRate / 100)).toLocaleString()}원
                          </p>
                          <p style={{textDecoration: 'line-through', color: '#ccc', fontSize:'0.9rem'}}>{wish.price}원</p>
                        </div>
                      </Wish_info>
                    </Wish_box>
                  </td>
                  <td style={{position: 'relative', textAlign:'center', verticalAlign:'middle'}}>
                    <Wish_deilivery>
                      <p>9월 28일 도착 예정</p>
                    </Wish_deilivery>
                    <Delete onClick={() => dispatch(deleteWish(wish.id))}>
                      <IoClose />
                    </Delete>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </WishTable>
    </Wrapper>
  )
}
