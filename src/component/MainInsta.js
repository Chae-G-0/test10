import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
import Marquee from "react-fast-marquee";

const SNS = [
    { id: 1, src: "/assets/mainInsta01.png" },
    { id: 2, src: "/assets/mainInsta02.jpg" },
    { id: 3, src: "/assets/mainInsta03.jpg" },
    { id: 4, src: "/assets/mainInsta04.png" },
    { id: 5, src: "/assets/mainInsta05.png" },
    { id: 6, src: "/assets/mainInsta06.jpg" },
    { id: 7, src: "/assets/mainInsta07.png" },
    { id: 8, src: "/assets/mainInsta08.png" },
    { id: 9, src: "/assets/mainInsta09.jpg" },
    { id: 10, src: "/assets/mainInsta10.jpg" },
];

const MainInsta = () => {
    // const setting = {
    //     infinite: true,
    //     arrows: false,
    //     autoplay: 1,
    //     slidesToShow: 7,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     pauseOnFocus: false,
    //     pauseOnHover: true,
    //     swipeToSlide: true,
    // };
    return (
        <section className="MainInsta csc">
            <div className="inner">
                <h2>서울대학교 소식 보러가기</h2>
            </div>
            {/* <Slider {...setting}>
                {SNS.map((sns, idx) => {
                    return (
                        <figure key={sns.id}>
                            <img src={process.env.PUBLIC_URL + sns.src} alt="" />
                            <a href="#!" title="SNU SNS 바로가기">
                                <i className="xi-instagram"></i>
                            </a>
                        </figure>
                    );
                })}
            </Slider> */}
            <Marquee gradient={false} pauseOnHover={true}>
                {SNS.map((sns, idx) => {
                    return (
                        <figure key={sns.id}>
                            <img src={process.env.PUBLIC_URL + sns.src} alt="" />
                            <a href="#!" title="SNU SNS 바로가기">
                                <i className="xi-instagram"></i>
                            </a>
                        </figure>
                    );
                })}
            </Marquee>
        </section>
    );
};

export default MainInsta;
