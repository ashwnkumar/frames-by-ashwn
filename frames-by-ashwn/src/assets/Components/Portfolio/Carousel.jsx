import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Carousel({ images, selectedIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const handlKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handlKeyDown);
    return () => {
      window.removeEventListener("keydown", handlKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="relative w-1/3 flex flex-col items-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="max-h-max"
        />
        <p className="text-custWhite pt-3 text-sm opacity-40">
          <span className="border border-custWhite p-1">
            {" "}
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          &nbsp; Prev | Next &nbsp;
          <span className="border border-custWhite p-1">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>{" "}
          &nbsp;
          <span className="border border-custWhite p-1">Esc</span>
          &nbsp; Close
        </p>
      </div>
    </div>
  );
}

export default Carousel;
