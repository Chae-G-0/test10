import React from "react";

const GNB = [
    { id: 1, title: "교육", link: "#!" },
    { id: 2, title: "연구", link: "#!" },
    { id: 3, title: "입학", link: "#!" },
    { id: 4, title: "대학생활", link: "#!" },
    { id: 5, title: "서울대 소식", link: "#!" },
    { id: 6, title: "대학소개", link: "#!" },
];

const Header = () => {
    return (
        <header className="Header">
            <div className="inner">
                <h1>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + "/assets/logo_w.png"} alt="" />
                    </a>
                </h1>
                <nav className="GNB">
                </nav>
            </div>
        </header>
    );
};

export default Header;
