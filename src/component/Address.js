import { useEffect, useState, useContext } from 'react';
import DaumPostCode from 'react-daum-postcode';

export function Address({popupClose, setLoaclAddress}) {
	useEffect(() => {
		console.log("주소 api");
	})

	const wrap = {
		display: "block",
		position: "fixed",
		overflow: "hidden",
		width: "350px",
		height: "400px",
		transform: "translate(-50%, -50%)",
		left: "50%",
		top: "50%",
		zIndex: "3",
		border: "3px solid",

	};


	const closeButtn = {
		cursor: "pointer",
    position: "absolute",
    right: "0px",
    top: "0px",
    zIndex: 1,
	}

	const handlePostCode = (data) => {
		let fullAddress = data.address;
		let extraAddress = '';

		if (data.addressType === 'R') {
			if (data.bname !== '') {
				extraAddress += data.bname;
			}
			if (data.buildingName !== '') {
				extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
			}
			fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
		}
		setLoaclAddress(data.zonecode, data.address);
		popupClose(); 
	}




	return (
		<div style={wrap}>
			<img src="//t1.daumcdn.net/postcode/resource/images/close.png" onClick={popupClose} style={closeButtn} id="btnCloseLayer"alt="닫기 버튼"></img>
			<DaumPostCode onComplete={handlePostCode}></DaumPostCode>
		</div>
	);
}
