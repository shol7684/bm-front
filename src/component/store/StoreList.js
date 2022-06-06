import React from 'react'
import style from './StoreList.module.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Score from '../score/Score';

function StoreList() {
  const [storeList, setStoreList] = useState([]);

  useEffect(()=>{
    setStoreList([
      {
        id: 1,
        imgSrc : "",
        storeName : "가게이름1",
        scoreAvg : 5,
        reviewCount : 2,
        managerCommentCount : 4,
        minDelevery : 0,
        deleveryTip : 1000,
        deleveryTime : 0,
        isOpen : true,
  
      },
      {
        id: 2,
        imgSrc : "",
        storeName : "가게이름2",
        scoreAvg : 5,
        reviewCount : 0,
        managerCommentCount : 0,
        minDelevery : 0,
        deleveryTip : 1000,
        deleveryTime : 0,
        isOpen : true,
  
      },
      {
        id: 3,
        imgSrc : "",
        storeName : "가게이름3",
        scoreAvg : 5,
        reviewCount : 0,
        managerCommentCount : 0,
        minDelevery : 0,
        deleveryTip : 1000,
        deleveryTime : 0,
        isOpen : false,
  
      },
    ]);
  }, [])


  const List = ()=>{
    const list = storeList.map((value, index)=>{
      return (
        <li key={value.id}>
            <Link to={`/store/detail/${value.id}`} className={style.store}>
              <div className={style.img_wrap}>
                  <img src="/img/pizza2.png" alt="이미지" />
              </div>

              <div className={style.info_wrap}>
                <h2>{value.storeName}</h2>
                <div>
                  <span>평점 {value.scoreAvg.toFixed(1)}</span>
                  <Score score={value.scoreAvg}></Score>
                </div>

                <div>
                  <span>리뷰 0</span>
                  <span>사장님 댓글 0</span>
                </div>

                <div>
                  <span>최소주문금액 1000원</span>
                  <span>배달팁 1000원</span>
                </div>

                <div>
                  <span>배달시간 0분</span>
                </div>
              </div>

              {value.isOpen === false && 
                <div className={`${style.isOpen} center_alignment`} >
                  <span className=''>지금은 준비중입니다</span>
                </div>
              }
              
            </Link>
        </li>
      )
    })

    return (
      <ul className={style.storeList}>
        {list}
      </ul>
    );
  }


  return (
    <div>
      <List></List>
    </div>
  )
}

export default StoreList