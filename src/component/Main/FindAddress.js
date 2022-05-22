import React from 'react'
import { useState, useEffect } from 'react';
import { Address } from './../Address';
import style from './Main.module.css';


export function FindAddress() {

 
   const [address1, setAddress1] = useState("");  // 우편번호
   const [address2, setAddress2] = useState("");  // 주소
   const [isPopupOpen, setIsPopupOpen] = useState(false);

   useEffect(()=>{
      const address = getLocalAddress();
      if(address !== null) {
         const {address1, address2} = address;
         setAddress1(address1);
         setAddress2(address2);
         console.log("주소 세팅");
      }
   }, [])


   const popupOpen = ()=>{
		setIsPopupOpen(true);
	}

	const popupClose = ()=>{
		setIsPopupOpen(false);
	}

   const setLoaclAddress = (address1, address2)=>{
      // 만료시간  일주일 후
     const exp = 60 * 60 * 24 * 7;
     const today = +new Date();

     const data = {
        address1 : address1,
        address2 : address2,
        exp : today + exp,
     }

     localStorage.setItem("address", JSON.stringify(data));
     setAddress1(address1);
     setAddress2(address2);
  }

  const getLocalAddress = () =>{
     try {
        const address = localStorage.getItem("address");

        if(!address) {
           return null;
        }

        const today = +new Date();
        const data = JSON.parse(address);
        const {address1, address2, exp} = data;
        if(exp < today) {
           localStorage.removeItem("address");
           return null;
        }

        return data;

     } catch(e) {
        console.log(e);
        console.log("잘못된주소");
        localStorage.removeItem("address");
        return null;
     }
  }


   return (
      <section className={style.address_search}>
         <input type="hidden" placeholder="우편번호" value={address1 || ''} />
         <input type="text" onClick={popupOpen} value={address2 || ''} placeholder="주소를 입력해 주세요" readOnly ></input>

         <div className={`${style.search_btn} center_alignment`}>
            <i className="fas fa-search"></i>
         </div>
         {isPopupOpen === true && 
            <Address popupClose={popupClose} setLoaclAddress={setLoaclAddress}></Address>
         }
      </section>
   )
}
