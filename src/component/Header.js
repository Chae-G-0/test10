import React, { useState } from "react";

const GNB = [
    {
        id: 1,
        title: "교육",
        link: "#1",
        submenu: [
            {
                content: "대학",
                link: "#!",
            },
            {
                content: "대학원",
                link: "#!",
            },
            {
                content: "공개강좌",
                link: "#!",
            },
            {
                content: "교육지원",
                link: "#!",
            },
        ],
    },
    {
        id: 2,
        title: "연구",
        link: "#!",
        submenu: [
            {
                content: "연구성과",
                link: "#!",
            },
            {
                content: "연구현황",
                link: "#!",
            },
            {
                content: "연구기관",
                link: "#!",
            },
            {
                content: "연구지원",
                link: "#!",
            },
        ],
    },
    {
        id: 3,
        title: "입학",
        link: "#!",
        submenu: [
            {
                content: "입학메인",
                link: "#!",
            },
            {
                content: "대학",
                link: "#!",
            },
            {
                content: "대학원",
                link: "#!",
            },
            {
                content: "입학도우미",
                link: "#!",
            },
        ],
    },
    {
        id: 4,
        title: "대학생활",
        link: "#!",
        submenu: [
            {
                content: "학생활동",
                link: "#!",
            },
            {
                content: "캠퍼스생활",
                link: "#!",
            },
            {
                content: "학사행정",
                link: "#!",
            },
        ],
    },
    {
        id: 5,
        title: "서울대 소식",
        link: "#!",
        submenu: [
            {
                content: "뉴스",
                link: "#!",
            },
            {
                content: "보도자료",
                link: "#!",
            },
            {
                content: "언론 속 서울대",
                link: "#!",
            },
            {
                content: "SNU 미디어",
                link: "#!",
            },
        ],
    },
    {
        id: 6,
        title: "서울대 소개",
        link: "#!",
        submenu: [
            {
                content: "대학현황",
                link: "#!",
            },
            {
                content: "대학상징",
                link: "#!",
            },
            {
                content: "역사",
                link: "#!",
            },
            {
                content: "캠퍼스",
                link: "#!",
            },
        ],
    },
];

const WORD = [
    {id:1, tit: "# 학사일정"},
    {id:2, tit: "# 입학안내"},
    {id:3, tit: "# 공지사항"},
    {id:4, tit: "# 장학금 안내"},
    {id:5, tit: "# 캠퍼스 지도"},
]

const Header = () => {
    const [TG, setTG] = useState(false);
    return (
        <header className="Header">
            <div className="inner">
                <h1>
                    <a href="/">
                        <img src={process.env.PUBLIC_URL + "/assets/logo_w.png"} alt="" />
                    </a>
                </h1>
                <nav className="GNB">
                    <ul>
                        {GNB.map((it, idx) => (
                            <li key={it.id}>
                                <a href={it.link}>{it.title}</a>
                                <ul className="smenu">
                                    {it.submenu.map((smenu, idx) => (
                                        <li key={idx}>
                                            <a href={smenu.link}>{smenu.content}</a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={`search ${TG ? "on" : ""}`}>
                    <strong onClick={() => setTG(!TG)}>
                        <i className="xi-search"></i>
                    </strong>
                    <div className="searchBox">
                        <form action="#!">
                            <input type="text" placeholder="검색어를 입력하세요" required />
                            <button>
                                <i className="xi-search"></i>
                            </button>
                        </form>
                        <div className="searchWord">
                            <ul>
                                {
                                    WORD.map(sw => {
                                        return(
                                            <li>
                                                <a href="#!">{sw.tit}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
