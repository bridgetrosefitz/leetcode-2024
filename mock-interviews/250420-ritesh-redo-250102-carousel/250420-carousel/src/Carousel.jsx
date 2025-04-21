// import ImageDisplay from "./ImageDisplay";
// import Controls from "./Controls";
// import { useState, useEffect, useRef } from "react";
// import { photos } from "../public/photos";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // console.log("Carousel rerender", Date.now());
//   const intervalCounterRef = useRef({});
//   const nextValidRef = useRef(1);

//   const navOptions = {
//     first: 0,
//     last: photos.length - 1,
//     increment: 1,
//     decrement: -1,
//   };

//   const AUTO_PROGRESS_AFTER = 3000;

//   useEffect(() => {
//     autoProgress();
//   }, []);

//   useEffect(() => {
//     console.log("currentIndex", currentIndex);
//   }, [currentIndex]);

//   function autoProgress() {
//     console.log("autoPgoress called", Date.now());
//     const thisIntervalNumber = nextValidRef.current;
//     nextValidRef.current += 1;

//     intervalCounterRef.current[thisIntervalNumber] = setInterval(() => {
//       // console.log("interval callback called,", thisIntervalNumber, Date.now());
//       handleChangePhoto("increment");
//     }, AUTO_PROGRESS_AFTER);
//   }

//   function handleChangePhoto(navOption) {
//     const navOptionEnum = navOptions[navOption];
//     if (navOption === "first" || navOption === "last") {
//       setCurrentIndex(navOptionEnum);
//     } else {
//       setCurrentIndex(
//         prev => (prev + navOptionEnum + photos.length) % photos.length
//       );
//     }
//   }

//   return (
//     <>
//       <Controls onChangePhoto={handleChangePhoto} />
//       <ImageDisplay imageUrl={photos[currentIndex]} />
//       {/* <Controls /> */}
//     </>
//   );
// };

// export default Carousel;
import ImageDisplay from "./ImageDisplay";

import Controls from "./Controls";

import { useState, useEffect, useRef } from "react";

import { photos } from "../public/photos";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);
  // const counterRef = useRef(1);
  // console.log("counterRef", counterRef.current);

  const navOptions = {
    first: 0,

    last: photos.length - 1,

    increment: 1,

    decrement: -1,
  };

  const AUTO_PROGRESS_AFTER = 3000;

  useEffect(() => {
    autoProgress();
  }, []);

  useEffect(() => {
    console.log("currentIndex", currentIndex);
  }, [currentIndex]);

  function autoProgress() {
    clearInterval(intervalRef.current);
    // const counter = counterRef.current;
    // counterRef.current += 1;

    intervalRef.current = setInterval(() => {
      // console.log("interval ", counter);
      handleChangePhoto("increment");
    }, AUTO_PROGRESS_AFTER);
  }

  function handleChangePhoto(navOption) {
    const navOptionEnum = navOptions[navOption];

    if (navOption === "first" || navOption === "last") {
      setCurrentIndex(navOptionEnum);
    } else {
      setCurrentIndex(
        prev => (prev + navOptionEnum + photos.length) % photos.length
      );
    }
  }

  return (
    <>
      <Controls onChangePhoto={handleChangePhoto} />

      <ImageDisplay imageUrl={photos[currentIndex]} />

      {/* <Controls /> */}
    </>
  );
};

export default Carousel;
