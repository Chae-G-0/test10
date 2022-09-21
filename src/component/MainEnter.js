import React from "react";

const NOTICE = [
    {
        id: 1,
        title: "2022학년도 2학기 대학원생 추가 입주 신청 및 선발 안내",
        date: "2022.09.19.",
        link: "#!",
    },
    {
        id: 2,
        title: "제76회 후기 학위수여식 안내",
        date: "	2022.08.17.",
        link: "#!",
    },
    {
        id: 3,
        title: "서울대학교 캠퍼스타운사업단 2022년 2학기 지역연계수업 참여 교과목 모집",
        date: "	2022.08.03.",
        link: "#!",
    },
    {
        id: 4,
        title: "서울대학교 제28대 총장을 모십니다",
        date: "2022.07.28.",
        link: "#!",
    },
    {
        id: 5,
        title: "서울대학교 언어교육원 2022 가을학기 한국어교사 양성과정 수강생 모집",
        date: "	2022.07.22.",
        link: "#!",
    },
    {
        id: 6,
        title: "2022학년도 제2학기 등록금 수납 계획 안내",
        date: "2022.07.14.",
        link: "#!",
    },
    {
        id: 7,
        title: "제32회「자랑스러운 서울대인」후보 추천 공고",
        date: "	2022.07.07.",
        link: "#!",
    },
    {
        id: 8,
        title: "2022학년도 2학기 관악학생생활관 입주대기자 신청 및 선발 안내",
        date: "2022.07.05.",
        link: "#!",
    },
    {
        id: 9,
        title: "2022년도 규장각-솔벗 학술연구비 지원 사업 공고",
        date: "	2022.07.01.",
        link: "#!",
    },
    {
        id: 10,
        title: "2022년도 규장각 신진학자 초청 연구 교류 사업 공고",
        date: "2022.07.01.",
        link: "#!",
    },
];

const ENTER = [
    { id: 1, title: "수시모집 바로가기" },
    { id: 2, title: "정시모집 바로가기" },
    { id: 3, title: "대학원 바로가기" },
    { id: 4, title: "글로벌 인재전형 바로가기" },
    { id: 5, title: "각종서식 다운로드" },
];

const MainEnter = () => {
    return (
        <section className="MainEnter csc">
            <h2>공지사항</h2>
            <div className="inner">
                <div className="left">
                    <ul>
                        {NOTICE.map((nt) => {
                            return (
                                <li key={nt.id}>
                                    <a href={nt.link}>
                                        <strong>{nt.title}</strong>
                                        <span>{nt.date}</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="right">
                    {ENTER.map((enter) => {
                        return (
                            <figure key={enter.id}>
                                <div className="right">
                                    <a href="#!">
                                        {enter.title}
                                        <i className="xi-angle-right-thin"></i>
                                    </a>
                                </div>
                            </figure>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MainEnter;
