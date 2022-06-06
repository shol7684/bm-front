import React from 'react'
import style from './StoreInfo.module.css'

function StoreInfo() {
  return (
    <div>
      <ul className={style.store_info} >
	    	<li>
          <h2>찾아 오시는 길</h2>
          
          <div className={style.map_wrap}>
            <div id="map"></div>
            
            <div className={style.position}>
              <button className="store_positon"><i className="far fa-dot-circle"></i> 가게 위치로</button>
              <button className="user_position"> <i className="far fa-dot-circle"></i> 내 위치로</button>
            </div>
          </div>
          
          <h2>위치안내</h2>
          <div>주소 : 두정동776, 상세주소 : 3층</div>
			  </li>
			

        <li>
          <h2>가게 소개</h2>
          <div>가게소개입니다</div>
        </li>
            

        <li className={style.business_info}>
          <h2>영업 정보</h2>

          <div>
            <div className={style.info_title}>
              <div>상호명</div>
              <div>영업시간</div>
              <div>전화번호</div>
            </div>
            
            <div>
              <div>피자나라치킨공주</div>
              <div>
                <span>0시</span>
                <span>~</span>
                <span>12시</span>
              </div>
              <div> 010-1234-5678</div>
            </div>
          </div>
        </li>
            
        <li className={style.statistics}>
          <h2>가계 통계</h2>
          <div>
            <div className={style.info_title}>
              <div>최근 주문수</div>
              <div>전체 리뷰 수</div>
              <div>찜</div>
            </div>
            
            <div>
              <div>0</div>
              <div>0</div>
              <div>0</div> 
            </div>
          </div>	
        </li>
	    </ul>
    </div>
  )
}

export default StoreInfo