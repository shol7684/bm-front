import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Join.module.css';
import axios from 'axios';

export function Join() {
	useEffect(() => {
		console.log("Join");
	})

	const submit = async (e)=>{
		e.preventDefault();
		
		const result = await axios.get("/api/main"); 

		console.log(result);
		
	}


	return (
		<div className={style.join_page}>
			<Link to="/">
				<img src="/img/bamin2.png" alt="이미지" className={style.bm_img} />
			</Link>
		<button onClick={submit}>전송</button>

			<form onSubmit={(e)=>submit(e)}>
				<div className={style.input_wrap}>
					<input type="text" className="input_base" name="username" maxLength="20" required placeholder="아이디를 입력해 주세요" />
					{/* <span class="msg_box">${errorMsg.username }</span> */}
				</div>

				<div className={style.input_wrap}>
					<input type="password" className="input_base" name="password" maxLength="20" required autoComplete='' placeholder="비밀번호를 입력해 주세요" />
				</div>

				<div className={style.input_wrap}>
					<input type="password" className="input_base" maxLength="20" required  autoComplete='' placeholder="비밀번호를 한번더 입력해 주세요" />
					{/* <span class="msg_box">${errorMsg.password }</span> */}
				</div>

				<div className={style.input_wrap}>
					<input type="text" className="input_base" name="email" required placeholder="이메일을 입력해 주세요" />
					{/* <span class="msg_box">${errorMsg.email }</span> */}
				</div>

				<div className={style.input_wrap}>
					<input type="text" className="input_base" name="nickname" maxLength="20" placeholder="사용하실 닉네임을 입력해 주세요" />
					{/* <span class="msg_box">${errorMsg.nickname }</span> */}
				</div>

				<div className={style.input_wrap}>
					<input type="number" className="input_base" name="phone" placeholder="'-' 없이 입력해 주세요" />
					{/* <span class="msg_box">${errorMsg.phone }</span> */}
				</div>

				<input type="submit" value="회원가입" className={style.join_btn} />
			</form>
		</div>
	);
}
