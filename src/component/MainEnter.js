import React from "react";

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
            <div className="inner">
                {
                    ENTER.map(enter => {
                        return (
                            <figure>
                                {enter.title}
                            </figure>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default MainEnter;
