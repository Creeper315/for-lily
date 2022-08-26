import '../scss/section2/imgShow.scss';

import yeah from '../img/yeah.jpeg';
import stitch from '../img/stitch.png';
import candy from '../img/candy.jpeg';
import { useState } from 'react';

const ImgShow = () => {
    const imgArr1 = [yeah, stitch, candy];
    const [ImgIdx, setImgIdx] = useState(0);

    function timeOutPromise(callback, time) {
        return new Promise((resolve) => {
            setTimeout(() => {
                callback();
                resolve();
            }, time);
        });
    }

    function nextImg() {
        setImgIdx((e) => e + 1);
    }

    return (
        <div id="img-show-contain">
            <img src={imgArr1[ImgIdx]} alt="img" loading="lazy" />
            <button onClick={nextImg}>next</button>
        </div>
    );
};

export default ImgShow;
