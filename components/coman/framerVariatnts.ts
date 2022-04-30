export const backgroundImageAnimation = {
    hidden: { scale: 0.1, opacity: 0 },
    visible: {
      scale: 1.4,
      opacity: 1,
      transition: { duration: 3, delay: 1 },
    },
  };
  
  export const backgroundImageOnHold = {
    hidden: { scale: 1, opacity: 1 },
    visible: {
      scale: 0.1,
      opacity: 0,
      transition: { duration: 1 },
    },
  };
  export const spinnerEffectOnHold = {
    hidden: { scale: 0.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 3, delay: 1 },
    },
  };
  
  export const spinnerOuter = {
    visible: {
      scale: 2,
      opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
      transition: { duration: 2, delay: 1 },
    },
  };
  
  export const spinnerMiddle = {
    visible: {
      scale: 2,
      opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
      transition: { duration: 2 },
    },
  };
  
  export const spinnerInner = {
    visible: {
      scale: 0.5,
      opacity: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
      transition: { duration: 2, delay: 1 },
    },
  };
  export const imagePopUpAnimation = {
    hidden: { scale: 0.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 2, delay: 1 },
    },
  };
  export const imagePopUpAnimationClose = {
    visible: {
      scale: 0.1,
      opacity: 0,
      transition: { delay: 1 },
    },
  };
  
  export const imagePopUpAnimationCloseMobile = {
    visible: {
      scale: 0.1,
      opacity: 0,
    },
  };
  
  export const svgVariants1 = {
    hidden: { scale: 1 },
    visible: {
      scale: 0.1,
      transition: { duration: 3 },
    },
  };
  export const navbarVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2 },
    },
  };
  
  export const backImgVariants = {
    hidden: { scale: 1.4, opacity: 1 },
    visible: {
      scale: 2,
      opacity: 1,
      transition: { duration: 5 },
    },
  };
  export const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
      rotate: 0,
      transition: { duration: 1 },
    },
  };
  
  export const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  
  export const svgVariantsDelay = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
  
      transition: {},
    },
  };
  export const svgVariantsDelay2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
  
      transition: {
        delay: 1,
        duration: 0.15,
      },
    },
  };
  export const svgVariantsDelay3 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
  
      transition: {
        delay: 3,
        duration: 0.15,
      },
    },
  };
  export const svgVariantsSizeIncrement = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { duration: 1 },
    },
  };
  export const textVariantsDelay = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 0,
  
      transition: {
        duration: 1,
      },
    },
  };
  export const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 0,
  
      transition: {
        duration: 1.5,
      },
    },
  };
  export const textVariantsDelay2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [1, 0],
  
      transition: {
        delay: 1.6,
        duration: 2.5,
      },
    },
  };
  export const textVariantsDelay3 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
  
      transition: {
        delay: 4.5,
      },
    },
  };
  
  export const historyImageSlide = {
    hidden: { x: 0, y: 0 },
    visible: {
      x: -950,
  
      transition: {
        x: {
          duration: 5,
          ease: [0.17, 0.67, 0.83, 0.67],
          type: "tween",
          stiffness: 20,
        },
      },
    },
  };
  export const historyImageSlideMobile = {
    hidden: { x: 0, y: 0 },
    visible: {
      x: -700,
  
      transition: {
        x: {
          duration: 5,
          ease: [0.17, 0.67, 0.83, 0.67],
          type: "tween",
          stiffness: 20,
        },
      },
    },
  };
  
  export const historySliderBack = {
    hidden: { x: 0, y: 0 },
    visible: {
      x: 0,
      y: 0,
  
      transition: {
        x: {
          duration: 1,
        },
        y: {
          duration: 3,
        },
      },
    },
  };
  
  export const pageBottomToTop = {
    hidden: { y: "100vh" },
    visible: {
      y: 0,
      transition: {
        duration: 1,
        ease: [0.17, 0.67, 0.83, 0.67],
        type: "tween",
        stiffness: 20,
      },
    },
  };
  
  export const modalTopToBottom = {
    hidden: { y: "100vh", x: 30, opacity: 1 },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 20 },
    },
  };
  export const modalBottomToTop = {
    hidden: { y: "-100vh", x: -30, opacity: 1 },
    visible: {
      y: 0,
      x: 0,
  
      opacity: 1,
      transition: { type: "spring", stiffness: 20 },
    },
  };
  
  export const naviagtionOpenText = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
  
      transition: { type: "spring", stiffness: 20, delay: 0.8, duration: 1 },
    },
  };
  
  
  
  export const naviagtionOpenText2 = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
  
      transition: { type: "spring", stiffness: 20, delay: 1.2, duration: 1 },
    },
  };
  
  export const naviagtionOpenText3 = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
  
      transition: { type: "spring", stiffness: 20, delay: 1.5, duration: 1 },
    },
  };
  
  
  
  
  export const naviagtionOpenText4 = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
  
      transition: { type: "spring", stiffness: 20, delay: 1.8, duration: 1 },
    },
  };
  
  export const naviagtionOpenText5 = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
  
      transition: { type: "spring", stiffness: 20, delay: 2, duration: 1 },
    },
  };
  export const naviagtionOpenText6 = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
  
      transition: { type: "spring", stiffness: 20, delay: 3, duration: 1 },
    },
  };
  
  
  
  
  export const naviagtionCloseText = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "10vh",
      opacity: 0,
  
      transition: { type: "spring", stiffness: 20, duration: 0.5 ,  delay:1  },
    },
  };
  
  
  export const naviagtionCloseText2 = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "10vh",
      opacity: 0,
  
      transition: { type: "spring", stiffness: 20, duration: 0.5 ,  delay:0.8 },
    },
  };
  export const naviagtionCloseText3 = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "10vh",
      opacity: 0,
  
      transition: { type: "spring", stiffness: 20, duration: 0.5  , delay:0.5 },
    },
  };
  export const naviagtionCloseText4 = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "10vh",
      opacity: 0,
  
      transition: { type: "spring", stiffness: 20, duration: 0.5 , delay:0.2 },
    },
  };
  export const naviagtionCloseText5 = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "10vh",
      opacity: 0,
  
      transition: { type: "spring", stiffness: 20, duration: 0.2 , delay:0.2 },
    },
  };
  
  
  export const naviagtionCloseText6 = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "10vh",
      opacity: 0,
  
      transition: { type: "spring", stiffness: 20, duration: 0.2  },
    },
  };
  
  
  export const naviagtionOpenDrop = {
    hidden: { y: "-100vh" },
    visible: {
      y: 0,
  
      transition: { duration: 1 },
    },
  };
  
  export const naviagtionCloseDrop = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: "-100vh",
  
      transition: { type: "spring", stiffness: 20, delay: 1.2, duration: 1 },
    },
  };
  
  export const naviagtionOpenHorizontal = {
    hidden: {x: "-200vh" },
    visible: {
      x: 0,
  
      transition:{ delay: 1, duration: 1 }
    },
  };
  export const naviagtionCloseHorizontal = {
    hidden: {x: 0 },
    visible: {
      x: "-200vh",
  
      transition:{  duration: 1.5 }
    },
  };
  
  export const naviagtionOpenVertical = {
    hidden: {y: "-100vh" },
    visible: {
      y: 0,
  
      transition:{ delay: 0.5, duration: 1 }
    },
  };
  export const naviagtionCloseVertical = {
    hidden: {y: 0 },
    visible: {
      y: "-100vh",
  
      transition:{ delay: 0.5, duration: 1 }
    },
  };
  
  
  
  
  export const naviagtionOpenOverView = {
    hidden: { y: "10vh", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
  
      transition: { type: "spring", delay: 0.7, stiffness: 20,  duration: 1.5 },
    },
  };
  
  export const naviagtionCloseOverView = {
    hidden: { y: 0, opacity: 1 },
    visible: {
      y: "10vh",
      opacity: 0,
  
      transition: { type: "spring", delay: 0.7, stiffness: 20, duration: 1 },
    },
  };
  