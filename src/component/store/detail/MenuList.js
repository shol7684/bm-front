import React, { useContext } from 'react'
import style from './MenuList.module.css';
import { StoreDetailContext } from './../../../context';
import MenuModal from '../../modal/MenuModal';
import { useState } from 'react';

function MenuList() {
  const context = useContext(StoreDetailContext);
  const menuList = context.storeDetail.menuList;

  const [isOpen, setOpen] = useState(false);
  const [selectMenu, setSelectMenu] = useState({});

  const openModal = (value)=>{
    setSelectMenu(value);
    setOpen(true);
  }

  const closeModal = ()=>{
    console.log("모달닫기");
    setOpen(false);
  }

  const list = menuList.map((value, index)=>{
    return (
      <li onClick={()=>openModal(value)} key={value.menuId}>
        <div className={style.menu_info}>
          <h2>{value.menuName}</h2>
          <div>{value.menuPrice}원</div>
        </div>

        <div className={style.img_wrap}>
          <img src={value.menuImg} />
        </div>
      </li>
    );
  })

  return (
    <div className={style.menuList}>
      <ul>
        {list}
      </ul>
      {isOpen === true && <MenuModal selectMenu={selectMenu} close={closeModal} />}
    </div>
  )
}

export default MenuList