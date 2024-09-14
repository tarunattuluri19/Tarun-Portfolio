// import "./hero.scss";
// import { motion } from "framer-motion";

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
//   scrollButton: {
//     opacity: 0,
//     y: 10,
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   },
// };
// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-220%",
//     transition: {
//       repeat: Infinity,
//       repeatType:"mirror",
//       duration: 20,
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="wrapper">
//         <motion.div
//           className="textContainer"
//           variants={textVariants}
//           initial="initial"
//           animate="animate"
//         >
//           <motion.h2 variants={textVariants}>TARUN ATTULURI</motion.h2>
//           <motion.h1 variants={textVariants}>
//             Passionate Full Stack Developer with 1+ years experience

//           </motion.h1>
//           {/* <motion.div variants={textVariants}>
//             Passionate Full Stack Developer with 1+ years experience

//           </motion.div> */}
          
//           <motion.div variants={textVariants} className="buttons">
//             <motion.button variants={textVariants}>
//               See My Latest Experience
//             </motion.button>
//             <motion.button variants={textVariants}><a href="https://www.linkedin.com/in/tarunattuluri/">Contact Me</a></motion.button>
//           </motion.div>
        
//           {/* <motion.img
//             variants={textVariants}
//             animate="scrollButton"
//             src="/scroll.png"
//             alt=""
//           /> */}
//         </motion.div>
//       </div>
//       {/* <motion.div
//         className="slidingTextContainer"
//         variants={sliderVariants}
//         initial="initial"
//         animate="animate"
//       >
//         Writer Content Creator Influencer
//       </motion.div>   
//        <div className="imageContainer">
//         <img src="/hero.png" alt="" /> */}
//       {/* </div> */}
//     </div>
//   );
// };

// export default Hero;

import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>TARUN ATTULURI</motion.h2>
          <motion.h1 variants={textVariants}>
            Passionate Full Stack Developer with 1+ years experience
          </motion.h1>
          
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See My Latest Experience
            </motion.button>

            <motion.button variants={textVariants}>
              <a
                href="https://docs.google.com/document/d/1G9h10FauPDjnc4zSTf5ITK0dFD67KPm_qvLPBZ9yP-o/edit?usp=sharing" // Replace this path with your resume file
                download="Tarun_Attuluri_Resume.pdf"
              >
                Want to see my Resume
              </a>
            </motion.button>

            <motion.button variants={textVariants}>
              <a href="https://www.linkedin.com/in/tarunattuluri/">
                Contact Me
              </a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
