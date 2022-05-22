import { useEffect, useState, useContext } from 'react';
import style from './Header.module.css';
import { Link } from 'react-router-dom';

export function Header() {
  useEffect(() => {
    console.log("헤더");
  })


  return (
    <header>
      <div>
        <Link to="/">
          <img src="/img/baemin.jpg" alt="로고"></img>
        </Link>
      </div>
    </header>
  );
}
