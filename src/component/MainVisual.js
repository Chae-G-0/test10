import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {}, [IDX]);
    const mainSlide = useRef(null);
    const setting = {
        arrows: false,
        autoplay: 1,
    };
    return (
        <section className="MainVisual">
            <Slider {...setting} ref={mainSlide}>
                {SLIDE.map((slide, idx) => {
                    return <figure key={slide.id} className={"item0" + slide.id + (idx === IDX ? " on" : "")}></figure>;
                })}
            </Slider>
            <div className="slogan">
                <img src={process.env.PUBLIC_URL + "/assets/symbol.png"} alt="" />
            </div>
        </section>
    );
};

export default MainVisual;
