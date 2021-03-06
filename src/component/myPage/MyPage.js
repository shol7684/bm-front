import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './MyPage.module.css';
import { Nav } from './../layout/Nav';

export function MyPage() {
  useEffect(()=>{
    console.log("MyPage");
  })

  return (
    <div className={style.myPage}>
       <section className={style.title}>
	        <h1>my 배민</h1> 
	    </section>


      <section className={style.menu_wrap}>
         <div className={style.login_box}>
            <Link to="/login">
               <span>로그인을 해주세요</span>
            </Link>
         </div>

         <div className={style.menu}>
            <Link to="/point">
               <div>
                  <img src='/img/point.png' alt='이미지'/>
               </div>
               <div className={style.name}>포인트</div>
               </Link>
         </div>

         <div className={style.menu}>
            <Link to="/point">
               <div>
                  <img src='/img/coupon.png' alt='이미지'/>
               </div>
               <div className={style.name}>쿠폰함</div>
               </Link>
         </div>

         <div className={style.menu}>
            <Link to="/point">
               <div>
                  <img src='/img/gift.png' alt='이미지'/>
               </div>
               <div className={style.name}>선물함</div>
            </Link>
         </div>

         <div className={style.menu}>
            <Link to="/point">
               <div>
                  <img src='/img/likes.png' alt='이미지'/>
               </div>
               <div className={style.name}>찜한가게</div>
            </Link>
         </div>

         <div className={style.menu}>
            <Link to="/point">
               <div>
                  <img src='/img/order.png' alt='이미지'/>
               </div>
               <div className={style.name}>주문내역</div>
            </Link>
         </div>

         <div className={style.menu}>
            <Link to="/point">
               <div>
                  <img src='/img/review.png' alt='이미지'/>
               </div>
               <div className={style.name}>리뷰관리</div>
            </Link>
         </div>

      </section>

    </div>

  );
}
