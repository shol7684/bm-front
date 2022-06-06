import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Main.module.css';
import { Nav } from '../layout/Nav';
import { Address } from '../Address';
import { FindAddress } from './FindAddress';
import { MainProvider } from '../../context';
import { MainContext } from './../../context';
import Category from './Category';



export function Main() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log("메인 페이지");
    setLoading(false);
  }, []);

  return (
    <MainProvider>
      <main className={style.main}>
        <FindAddress></FindAddress>

        <section className={style.category_wrap}>
          {loading === true && "로딩"}
          {loading === false && <Category></Category>}
        </section>
      </main>
    </MainProvider>
  );
}
