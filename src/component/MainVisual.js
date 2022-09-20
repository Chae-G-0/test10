import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, title: "정문" },
    { id: 2, title: "미술관" },
    { id: 3, title: "봄 캠퍼스" },
    { id: 4, title: "도서관" },
    { id: 5, title: "광장" },
];

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {}, [IDX]);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        autoplay: 1,
    };
    return (
        <div className="MainVisual">
            <Slider {...setting} ref={mainSlide}>
                {SLIDE.map((slide, idx) => {
                    return (
                        <figure key={slide.id} className={"item0" + slide.id + (idx === IDX ? " on" : "")}>
                            <div className="inner">
                                <h2>{slide.title}</h2>
                            </div>
                        </figure>
                    );
                })}
            </Slider>
        </div>
    );
};

export default MainVisual;
