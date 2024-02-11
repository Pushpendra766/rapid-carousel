import React, { useEffect, useState, useMemo, FC } from "react";
import "./Carousel.style.css";

interface Props {
  numberOfSlides: number;
  imageData: Array<string>;
  showNavDots: boolean;
}

const Carousel: FC<Props> = ({ numberOfSlides, imageData, showNavDots }) => {
  const imageElements = useMemo(
    () =>
      imageData.map((imgUrl) => {
        return (
          <img
            src={imgUrl}
            alt="Carousel Image"
            key={imgUrl}
            className="w-40 h-40 object-cover rounded-md"
          />
        );
      }),
    [imageData]
  );
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentRange, setCurrentRange] = useState(
    Array(numberOfSlides)
      .fill(1)
      .map((_, idx) => idx)
  );
  const calculateRange = (currIdx: number) => {
    const newRange = [];
    for (let i = 0; i < numberOfSlides; i++) {
      const idx = currIdx - Math.trunc(numberOfSlides / 2) + i;
      newRange.push(filterIndex(idx));
    }
    setCurrentRange(newRange);
  };
  const handleNext = (currIdx: number) => {
    setCurrentIdx(filterIndex(currIdx + 1));
    calculateRange(filterIndex(currIdx + 1));
  };

  const handlePrev = (currIdx: number) => {
    setCurrentIdx(filterIndex(currIdx - 1));
    calculateRange(filterIndex(currIdx - 1));
  };

  const handleNavDotClick = (currIdx: number) => {
    setCurrentIdx(currIdx);
    calculateRange(currIdx);
  };

  const filterIndex = (idx: number) => {
    if (idx < 0) {
      return imageData.length + idx;
    } else if (idx >= imageData.length) {
      return idx % imageData.length;
    }
    return idx;
  };
  useEffect(() => {
    calculateRange(0);
  }, []);

  return (
    <div className="carousel-container">
      <button
        onClick={() => handlePrev(currentIdx)}
        className={`nav-btn ${showNavDots && " mb--7"}`}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
          className="nav-btn-svg"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M3094 4015 c-66 -33 -1345 -1311 -1369 -1367 -19 -48 -19 -128 0
-176 22 -51 1323 -1354 1381 -1382 24 -12 61 -20 93 -20 154 0 255 158 190
300 -15 34 -156 182 -592 618 l-572 572 567 568 c433 432 572 578 587 612 83
183 -105 365 -285 275z"
            />
          </g>
        </svg>
      </button>
      <div>
        <div className="image-container">
          {currentRange.map((imgIdx) => imageElements[filterIndex(imgIdx)])}
        </div>
        {showNavDots && (
          <div className="nav-dots-container">
            {imageData.map((imgUrl, idx) => (
              <div
                key={imgUrl}
                onClick={() => handleNavDotClick(idx)}
                className={`nav-dot ${
                  idx === currentIdx ? "dark-dot " : "light-dot"
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>
      <button
        onClick={() => handleNext(currentIdx)}
        className={`nav-btn ${showNavDots && " mb--7"}`}
      >
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
          className="nav-btn-svg"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M1819 4027 c-64 -34 -102 -93 -107 -166 -8 -112 -33 -83 601 -718
l582 -583 -582 -583 c-634 -635 -609 -606 -601 -718 8 -110 93 -189 206 -189
29 0 70 7 90 17 42 18 1314 1280 1365 1353 36 52 47 133 27 196 -10 32 -142
169 -679 707 -446 447 -679 674 -707 687 -57 28 -138 27 -195 -3z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
