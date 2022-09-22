import React from "react";

const MainVideo = () => {
    return (
        <section className="MainVideo csc">
            <h2>홍보영상</h2>
            <div className="inner">
                <video autoPlay={true} muted={true} loop={true} controls={true}>
                    <source src={process.env.PUBLIC_URL + "/assets/snuV.mp4"} type="video/mp4" />
                </video>
            </div>
        </section>
    );
};

export default MainVideo;
