import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Login.module.css';

export function Login() {
  useEffect(() => {
    console.log("로그인 페이지");
  })


	const submit = (e)=>{
		e.preventDefault();

		console.log(123);
		
	}


  return (
    <div className={style.login_page}>
      <Link to="/">
        <img src="/img/bamin2.png" alt="이미지" className={style.bm_img} />
      </Link>

      <form onSubmit={(e)=>submit(e)}>
        <div className={style.input_wrap}>
          <input type="text" className="input_base" name="username" required placeholder="아이디을 입력해 주세요" maxLength="30" />
        </div>
        
        <div className={style.input_wrap}>
          <input type="password" className="input_base" name="password" autoComplete='' required placeholder="비밀번호를 입력해 주세요" maxLength="30" />
        </div>

        <input type="submit" value="로그인" className={style.login_btn} />

        <section>
          <label htmlFor="remember_me">
            <span>로그인 유지하기</span>
            <input type="checkbox" id="remember_me" name="remember-me" />
            <i className="fas fa-check-square"></i> 
          </label>

          <div className={style.id_search}>
            <Link to="/find/id">아이디</Link>
            <Link to="/find/password">비밀번호 찾기</Link>
          </div>
        </section>
      </form>

      <div className={style.oauth_login}>
        <div>
          <Link to="/oauth2/authorization/kakao"></Link>
        </div>

        <div>
          <Link to="/oauth2/authorization/naver"></Link>
        </div>

        <div>
          <Link to="/oauth2/authorization/google"></Link>
        </div>
      </div>

      <div className={style.join}><Link to="/join" >회원 가입하러 가기</Link></div>
    </div>
  );
}
