import React from 'react'
import style from './Cart.module.css';
import { useState, useEffect, useContext, createRef } from 'react';
import { StoreDetailContext } from './../../../context';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const context = useContext(StoreDetailContext);
  const {storeDetail, cartList, setCartList} = context;
  const {cartTotal, setCartTotal} = context;
  const {minDelevery} = context.storeDetail;

  const navigate = useNavigate();



  useEffect(()=>{
    console.log("카트 리스트");
    const cartJson = localStorage.getItem("cart");

    if(cartJson !== null) {
      const cart = JSON.parse(cartJson);

      const total = calcTotal(cart);

      setCartTotal(total);
      setCartList(cart);
    }

  }, []);




  // 메뉴 옵션 그리기
  const MenuOptionList = (option)=>{
    const list = option.map((value)=>{
      return (
        <li key={value.menuOptionId} className={style.option_list}>
          {value.menuOptionName} {value.menuOPtionPrice.toLocaleString()}원
        </li>
      )
    })

    return (
      <ul>
        {list}
      </ul>
    )
  }



  // 카트 리스트 그리기
  const CartList = ()=>{
    const reulst = cartList.map((value, index) =>{

      return (
        <li key={index}>
          <h3>{value.menuName}</h3>
          <div>{value.menuPrice.toLocaleString()}원</div>
          <div>수량 : {value.quantity} </div>
          <div> 
            {MenuOptionList(value.option)}
          </div>
          <div>합계 : {value.total.toLocaleString()}원</div>
          <button className={style.cancle_btn} onClick={()=>cartDeleteOne(index)}>ｘ</button> 
        </li>
      )
    })


    return (
      <>
        <ul>
          {reulst}
        </ul>
        <div className={style.cart_total}>총 합계 : {cartTotal.toLocaleString()}원</div>
      </>
    )
  }



  // 장바구니 가격 합계 
  const calcTotal = (cartList)=>{
    let sum = 0;

    cartList.forEach((value) => {
      sum += value.total;
    });

    return sum;
  }


  // 장바구니 비었을때
  const Empty = ()=>{
    return (
      <div className={style.empty}>장바구니가 비었습니다.</div>
    )
  }


  // 장바구니 전부 비우기
  const cartDeleteAll = ()=>{
    console.log("카트 삭제");
    localStorage.removeItem("cart");
    setCartList([]);
    setCartTotal(0);
  }


  // 장바구니 한개 삭제
  const cartDeleteOne = (index)=>{
    const newCart = cartList.filter((v, i)=>{
      return i !== index;
    })

    localStorage.setItem("cart", JSON.stringify(newCart));
    const total = calcTotal(newCart);
    setCartList(newCart);
    setCartTotal(total);
  }


  // 주문하기
  const order = ()=>{ 
    if(cartTotal < minDelevery) {
      console.log("최소주문금액이 부족합니다");
      return;
    }

    navigate(`/order/${storeDetail.storeId}`);

    console.log(cartList);
  }


  return (
    <>
    <aside className={style.cart}>
      <div>
        <h2>장바구니</h2>
        <i className={`far fa-trash-alt ${style.deleteAll}`}
            onClick={cartDeleteAll}>
        </i>

        <div className={style.cart_list}>
          {cartList.length !== 0 && <CartList></CartList>}
          {cartList.length === 0 && <Empty></Empty>}
        </div>

      <div>
        <button className={cartTotal >= minDelevery ? style.active : style.order_btn } 
          onClick={order} >주문하기</button>
      </div>
    </div>

  </aside>

  {/* 모바일 장바구니 */}
  <div className={`${style.m_cart} center_alignment`}>
    <i className="fas fa-shopping-cart"></i>
    {cartList.length > 0 && <span>{cartList.length}</span>}
  </div>
  </>
  )
}

export default Cart