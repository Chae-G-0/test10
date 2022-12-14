import React from "react";

const NEWS = [
    {
        id: 1,
        cate: "서울대뉴스",
        title: "언제든 택배를 내 손 안에, 관악학생생활관 무인 택배 시스템 개시",
        des: "지난 7월 30일부터 서울대학교 관악학생생활관(이하 생활관)에서 택배보관소가 없어지고 무인 택배보관함이 문을 열었다. 24시간 운영하는 동별 무인 택배보관함이 생기면서 입주생들은 보다 편리하게 택배를 찾을 수 있게 됐다.",
        src: "/assets/mainNews01.jpg",
        link: "#!",
    },
    {
        id: 2,
        cate: "서울대뉴스",
        title: "중앙도서관 〈책 빌려주는 교수님〉展 - 교수님, 책 추천해주세요!",
        des: "지난 7월 26일(화), 서울대학교 중앙도서관 본관 2층 북카페에서〈책 빌려주는 교수님〉전시가 시작됐다. 이번 전시는 서울대 교수들의 추천도서를 소개하는 기사를 연재 중인 대학신문과 중앙도서관이 공동으로 주최했다.",
        src: "/assets/mainNews02.jpg",

        link: "#!",
    },
    {
        id: 3,
        cate: "서울대뉴스",
        title: "변화할 미래 교육을 위한 대비, 사범대 AI 교육 강화 사업",
        des: "서울대는 예비 교원들이 AI 기반 에듀테크를 활용해 수업을 설계 및 실행할 수 있는 능력을 갖추게 하고자 AI 교육 강화 사업단을 신설했다.",
        src: "/assets/mainNews03.jpg",

        link: "#!",
    },
    {
        id: 4,
        cate: "서울대뉴스",
        title: "진짜 서울대 '입구'역이 뚫렸다, 신림선 도시철도 개통",
        des: "지난 5월 개통한 신림선 도시철도는 서울대 정문과 여의도 일대를 직통으로 연결해 학내 구성원들에게 많은 이점을 가져다주고 있다.",
        src: "/assets/mainNews04.jpg",

        link: "#!",
    },
    {
        id: 5,
        cate: "서울대뉴스",
        title: "연대의 뜻으로 함께한 수해복구 자원봉사",
        des: "지난달 중부 지방에서 발생한 기록적인 폭우로 서울대도 큰 피해를 입었다. 총학생회를 중심으로 모인 350여 명의 학생들은 수해복구를 위해 구슬땀을 흘렸다.",
        src: "/assets/mainNews05.jpg",

        link: "#!",
    },
    {
        id: 6,
        cate: "연구성과",
        title: "간유래 TM4SF5-탑재 소포체의 혈중 포도당 항상성 유지 기능 규명",
        des: "약학대학 이정원 교수 연구팀은 세포 혹은 생쥐 실험동물 모델에서 간세포 유래 소포체(엑소좀)을 분리, 분석하는 기술을 개발을 개발했다고 밝혔다.",
        src: "/assets/mainNews06.jpg",

        link: "#!",
    },
    {
        id: 7,
        cate: "서울대뉴스",
        title: "새단장한 온라인 학습 도우미, New eTL",
        des: "2022년 하계 계절수업부터 서울대학교 신규 이러닝 시스템 New eTL이 운영되기 시작했다.",
        src: "/assets/mainNews07.png",

        link: "#!",
    },
    {
        id: 8,
        cate: "연구성과",
        title: "비브리오 패혈증균의 적혈구를 매개한 혈전생성 원인 세계 최초 규명을 통한 새로운 치료방안 제시",
        des: "농생명공학부 최상호 교수 연구팀은 세계 최초로 패혈증 비브리오균에 의한 정맥혈전증의 발생원인과 유해인자를 규명했다고 밝혔다.",
        src: "/assets/mainNews08.jpg",
        link: "#!",
    },
];

const MainNews = () => {
    return (
        <section className="MainNews csc">
            <h2>지금 서울대학교에서는</h2>
            <div className="inner">
                {NEWS.map((news) => {
                    return (
                        <figure key={news.id}>
                            <div className="box">
                                <img src={process.env.PUBLIC_URL + news.src} alt={news.title} />
                                <strong>{news.cate}</strong>
                                <div className="title">{news.title}</div>
                                <div className="des" title={news.des}>
                                    {news.des}
                                </div>
                            </div>
                        </figure>
                    );
                })}
            </div>
        </section>
    );
};

export default MainNews;
