import ImageDisplay from "./ImageDisplay";
import Controls from "./Controls";
import { useState, useEffect } from "react";
import { photos } from "../public/photos";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navOptions = {
    first: 0,
    last: photos.length - 1,
    increment: 1,
    decrement: -1,
  };

  useEffect(() => {
    console.log("currentIndex", currentIndex);
  }, [currentIndex]);

  // const handleChangePhoto = navOption => {
  //   const navOptionEnum = navOptions[navOption];
  //   if (navOptionEnum === 0) {
  //     setCurrentIndex(0);
  //   } else if (navOptionEnum === photos.length - 1) {
  //     setCurrentIndex(photos.length - 1);
  //   } else {
  //     setCurrentIndex(prev => prev + navOptionEnum);
  //   }
  // };

  const handleChangePhoto = navOption => {
    const navOptionEnum = navOptions[navOption];
    if (navOption === "first" || navOption === "last") {
      setCurrentIndex(navOptionEnum);
    } else {
      setCurrentIndex(
        prev => (prev + navOptionEnum + photos.length) % photos.length
      );
    }
  };

  return (
    <>
      <Controls onChangePhoto={handleChangePhoto} />
      <ImageDisplay imageUrl={photos[currentIndex]} />
      {/* <Controls /> */}
    </>
  );
};

export default Carousel;
