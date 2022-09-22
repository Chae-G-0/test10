import React, { useEffect, useState } from "react";

const FLINK = [
    { id: 0, name: "Family Link", link: "/" },
    { id: 1, name: "입학안내 메인", link: "https://admission.snu.ac.kr/index.html" },
    { id: 2, name: "영어사이트", link: "https://en.snu.ac.kr/" },
    { id: 3, name: "서울대 팩트체크", link: "https://factcheck.snu.ac.kr/" },
];

const FamilyLink = () => {
    const [flnk, setFlnk] = useState();

    useEffect(() => {
        flnk && window.open(flnk);
    }, [flnk]);

    return (
            <select onChange={(e) => setFlnk(e.target.value)}>
                {FLINK.map((link) => {
                    return (
                        <option value={link.link} key={link.id}>
                            {link.name}
                        </option>
                    );
                })}
            </select>
    );
};

export default FamilyLink;
