import React from "react";

const GNB = [
    {
        id: 1,
        title: "교육",
        link: "/s1",
        submenu: [
            {
                content: "대학",
                link: "/1",
            },
            {
                content: "대학원",
                link: "/2",
            },
            {
                content: "공개강좌",
                link: "/3",
            },
            {
                content: "교육지원",
                link: "/4",
            },
        ],
    },
    {
        id: 2,
        title: "연구",
        link: "/s2",
        submenu: [
            {
                content: "연구성과",
                link: "/1",
            },
            {
                content: "연구현황",
                link: "/2",
            },
            {
                content: "연구기관",
                link: "/3",
            },
            {
                content: "연구지원",
                link: "/4",
            },
        ],
    },
    {
        id: 3,
        title: "입학",
        link: "/s3",
        submenu: [
            {
                content: "입학메인",
                link: "/1",
            },
            {
                content: "대학",
                link: "/2",
            },
            {
                content: "대학원",
                link: "/3",
            },
            {
                content: "입학도우미",
                link: "/4",
            },
        ],
    },
    {
        id: 4,
        title: "대학생활",
        link: "/s4",
        submenu: [
            {
                content: "학생활동",
                link: "/1",
            },
            {
                content: "캠퍼스생활",
                link: "/2",
            },
            {
                content: "학사행정",
                link: "/3",
            },
        ],
    },
    {
        id: 5,
        title: "서울대 소식",
        link: "/s5",
        submenu: [
            {
                content: "뉴스",
                link: "/1",
            },
            {
                content: "보도자료",
                link: "/2",
            },
            {
                content: "언론 속 서울대",
                link: "/3",
            },
            {
                content: "SNU 미디어",
                link: "/4",
            },
        ],
    },
    {
        id: 6,
        title: "서울대 소개",
        link: "/s6",
        submenu: [
            {
                content: "대학현황",
                link: "/1",
            },
            {
                content: "대학상징",
                link: "/2",
            },
            {
                content: "역사",
                link: "/3",
            },
            {
                content: "캠퍼스",
                link: "/4",
            },
        ],
    },
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
            </div>
        </header>
    );
};

export default Header;
