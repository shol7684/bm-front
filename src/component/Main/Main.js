import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Main.module.css';
import { Nav } from '../layout/Nav';
import { Address } from '../Address';
import { FindAddress } from './FindAddress';

export function Main() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("메인 페이지");
    setLoading(false);
  })


  const list = [
    {
      category : "피자",
      imgSrc : "/pizza2.png"
    },
    {
      category : "치킨",
      imgSrc : "/chicken1.png"
    },
    {
      category : "패스트푸드",
      imgSrc : "/hamburger4.png"
    },
    {
      category : "분식",
      imgSrc : "/bunsik1.png"
    },
    {
      category : "카페/디저트",
      imgSrc : "/dessert2.png"
    },
    {
      category : "돈까스/일식",
      imgSrc : "/cutlet1.png"
    },
    {
      category : "중국집",
      imgSrc : "/chinese1.png"
    },
    {
      category : "족발/보쌈",
      imgSrc : "/jockbal1.png"
    },
    {
      category : "야식",
      imgSrc : "/jockbal2.png"
    },
    {
      category : "한식",
      imgSrc : "/bibimbap.jpg"
    },
  ];


  const Category = ()=>{
    const category = list.map((value, index)=>{
      return (
        <li key={index}>
          <div className={style.img_wrap}>
            <img src={"/img" + value.imgSrc} alt="이미지" />
          </div>
          <div>
          </div>
          <div className={style.name}>{value.category}</div>
        </li>
      )
    })

    return <ul className={style.category}>
      {category}
    </ul>;
  }



  return (
    <main>
      {/* <section className={style.address_search}>
          <input type="hidden" placeholder="우편번호" value="주소" name="address1" />
          <input type="text" onClick={findAddress} value={address} placeholder="주소를 입력해 주세요" name="address2"></input>

        <div className={`${style.search_btn} center_alignment`}>
            <i className="fas fa-search"></i>
        </div>
        {isOpen === true && <Address setIsOpen={setIsOpen}></Address>}
      </section> */}
      <FindAddress></FindAddress>

      <section className={style.category_wrap}>
        {loading === true && "로딩"}
        {loading === false && <Category></Category>}
      </section>
    </main>
  );
}
