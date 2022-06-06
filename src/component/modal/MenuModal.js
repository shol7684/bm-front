import React, { useEffect } from 'react'
import './ModalCommon.css'
import style from  './MenuModal.module.css'
import { useState, useContext } from 'react';
import { modal } from './ModalCommon';
import Loading from '../loading/Loading';
import { StoreDetailContext } from './../../context';




function MenuModal({selectMenu, close}) {
  const context = useContext(StoreDetailContext);
  const {storeDetail, cartList, setCartList} = context; 
  const {cartTotal, setCartTotal} = context;
  
  const [loading, setLoading] = useState(true);
  const [menuOption, setMenuOption] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectOptionList, setSelectOptionList] = useState([]);
  const [selectOptionId , setSelectOptionId] = useState([]);

  useEffect(()=>{
    console.log("메뉴모달 그려짐"); 
    console.log(selectMenu);
    modal.BGscrollOff();


    const data = [
        {
          menuOptionId : 1,
          menuOptionName : "베이컨 추가",
          menuOPtionPrice : 1000,
        },
        {
          menuOptionId : 2,
          menuOptionName : "치즈 추가",
          menuOPtionPrice : 1000,
        },
    ]
    setMenuOption(data);
    setLoading(false);
    

    return modal.BGscrollOn;
  },[])



  const changeHadler = (e)=>{
    const checked = e.tartget.checked;
    e.tartget.checked = !checked;
  }

  const MenuOption = ()=>{
    const list = menuOption.map((value, index)=>{
      const menuOptionId = value.menuOptionId;
      return (
        <li key={menuOptionId}>
          <div>
            <label>
              <input type="checkbox" id={menuOptionId} 
                checked={selectOptionId.includes(menuOptionId) ? true : false }
                onChange={(e)=>selectOptin(e, value)}/>

              <i className="fas fa-check-square"></i>
              <span>{value.menuOptionName}</span>
            </label>
          </div>

          <div>{value.menuOPtionPrice.toLocaleString()}원</div>
        </li>
      )
    })

    return (
      <ul className={style.menu_option}>
        {list}
      </ul>
    );
  }



  const quantityMinus = ()=>{
    if(quantity <= 1) return;

    setQuantity(quantity - 1);
  }

  const quantityPlus = ()=>{
    setQuantity(quantity + 1);
  }


  // 옵션 체크박스 선택
  const selectOptin = (e, value)=>{
    console.log("옵션 선택");
    if(e.target.checked === true) {
      console.log(value.menuOptionId);

      setSelectOptionId([...selectOptionId, value.menuOptionId] );
      setSelectOptionList([...selectOptionList, value]);

    } else {
      const optionFilter = selectOptionList.filter((v, i)=>{

        return v !== value;
      })

      const optionIdFilter = selectOptionId.filter((v, i)=>{
        return v !== value.menuOptionId;
      })


      setSelectOptionList(optionFilter);
      setSelectOptionId(optionIdFilter);

    }

    // e.target.value = "off";
  }


  // 총 주문금액 보여주기
  const totalPrice = ()=>{
    let optionPriceTotal = 0;
    selectOptionList.forEach((value)=>{
      optionPriceTotal += value.menuOPtionPrice;
    })

    return (selectMenu.menuPrice + optionPriceTotal) * quantity; 
  }


  // 메뉴이름, 가격, 옵션이 같은지 비교
  const cartCompare = (obj1, obj2)=>{
    return obj1.menuName === obj2.menuName &&
    obj1.menuPrice === obj2.menuPrice &&
    JSON.stringify(obj1.option) === JSON.stringify(obj2.option);
  }


  // 장바구니에 담기
  const addCart = ()=>{

    const data = {
      menuName : selectMenu.menuName,
      menuPrice : selectMenu.menuPrice, 
      quantity : quantity,
      option : selectOptionList.sort((a, b)=>{ return a.menuOptionId - b.menuOptionId}),
      total : totalPrice(),
    }


    // 카트에 이미 담겨져 있는지 확인 
    // 있다면 수량, 가격합계 증가
    for(let i=0;i<cartList.length;i++) {

      if(cartCompare(cartList[i], data)) {

        cartList[i].quantity += quantity;
        cartList[i].total += data.total;

        const newCart = [...cartList];
        setCartList(newCart); 
        setCartTotal(cartTotal + data.total);
        localStorage.setItem("cart", JSON.stringify(newCart));

        close();
        return;
      }
    }

    // 장바구니에 처음담거나 새로운 메뉴 담을때
    const newCart = [...cartList, data]; 
    setCartList(newCart);
    setCartTotal(cartTotal + data.total);
    localStorage.setItem("cart", JSON.stringify(newCart));
    close();
  }

  return (
    <>
      {loading === true && <Loading bg={false}></Loading>}
      
      <div className="modal_bg" onClick={close}></div> 
      <div className="modal_wrap">

        {loading === false && 
          <>
          <div className="modal_header center_alignment">
            <h1>메뉴 상세</h1>
            <button className="close" onClick={close}> 
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className={`modal_main ${style.menu_wrap}`}>

              <img src={selectMenu.menuImg} alt="이미지" className={style.menu_img} />

              <div className={style.menu_info}>

                {/* 메뉴 이름 + 메뉴 설명 */}
                <section>
                  <h2 className={style.menu_name}>{selectMenu.menuName}</h2>
                  <div className={style.menu_description}>
                    {selectMenu.menuDescription}
                  </div>
                </section>


                {/* 가격 */}
                <div className={style.menu_price}>
                  <h2>가격</h2>
                  <span className={style.menu_price}>{Number(selectMenu.menuPrice).toLocaleString()}원</span>
                </div>


                {/* 옵션 선택*/}
                <h2>옵션 선택</h2>
                <div className={style.option}>
                  <MenuOption></MenuOption>
                </div>
                
                
                {/* 수량  */}
                <div className={style.quantity_wrap}>
                  <h2>수량</h2>
                  <div className={style.quantity_btn_wrap}>
                    <button onClick={quantityMinus}>-</button>
                    <span>{quantity}</span>
                    <button onClick={quantityPlus}>+</button>
                  </div>
                </div>

              </div>
          </div>

          <div className={style.total_wrap}>
            <div>배달최소주문금액 {storeDetail.minDelevery.toLocaleString()}원</div>
            <div className={style.total}>총 주문금액 {totalPrice().toLocaleString() }원</div>
          </div>

          <div className="modal_buttons">
            <button className="close" onClick={close}>취소</button>
            <button className="add_cart" onClick={addCart}>장바구니에 담기</button>
          </div>
        </> 
        }
      </div>
  </>
  )
}

export default MenuModal