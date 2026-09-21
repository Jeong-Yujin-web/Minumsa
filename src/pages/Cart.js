import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { deleteItem } from '../store/store.js';
import { addCount } from '../store/store.js';
import { subCount } from '../store/store.js';

import Table from 'react-bootstrap/Table';

export default function Cart() {
  const state=useSelector((state)=>state);
  const totalPrice = state.cart.reduce((total, item) => {
  const discountPrice =
    item.price * (1 - item.discountRate / 100);

  return total + discountPrice * item.count;
}, 0);
  const dispatch=useDispatch();
  return (
    <div>
      <h2> {state.user.name}님의 장바구니</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>상품명</th>
            <th>수량</th>
            <th>총 금액</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((item, i)=>{
              return(
                <tr key={i}>
                  <td>{item.title}</td>
                  <td>
                    <button onClick={()=>dispatch(addCount(item.id))}>+</button>
                    {item.count}
                    <button onClick={()=>dispatch(subCount(item.id))}>-</button>
                    <button onClick={()=>dispatch(deleteItem(item.id))}>삭제</button>
                  </td>
                  <td>
                    {(
                      item.price *
                      (1 - item.discountRate / 100) *
                      item.count
                    )}원
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  )
}
