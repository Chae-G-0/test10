import React from "react";
import FamilyLink from "./FamilyLink";

const FTT = [
    { id: 1, tit: "정보공시", link: "#!" },
    { id: 2, tit: "전화번호/사이트 안내", link: "#!" },
    { id: 3, tit: "서울대포털", link: "#!" },
    { id: 4, tit: "클린행정센터 ", link: "#!" },
    { id: 5, tit: "개인정보처리방침", link: "#!" },
    { id: 6, tit: "이메일무단수집거부", link: "#!" },
    { id: 7, tit: "복지보조금 부정 신고", link: "#!" },
];

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="ft_top">
                    <ul>
                        {FTT.map((ft) => {
                            return <li key={ft.id}>{ft.tit}</li>;
                        })}
                    </ul>
                    <FamilyLink />
                </div>
                <div className="ft_b">
                  <div className="left">
                  <address>08826 서울시 관악구 관악로 1 서울대학교</address>
                    <a href="tel:02-880-5114">TEL. 02-880-5114</a>
                    <p>Copyright 2022 Seoul National University All Rights Reserved.</p>
                  </div>
                  <div className="right">
                    <a href="#!"><i className="xi-facebook"></i></a>
                    <a href="#!"><i className="xi-youtube-play"></i></a>
                    <a href="#!"><i className="xi-instagram"></i></a>
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
