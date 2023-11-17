import { useEffect, useRef, useState } from "react";
import "./PopUp.scss";
import { motion, AnimatePresence } from "framer-motion";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const popUp = {
  open: {
    width: "76vw",
    height: "22vw",
    padding: "7vw 5vw",
    left: "50%",
    top: "50%",
    opacity: 1,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      opacity: { duration: 0.34 },
    },
  },
  closed: {
    top: "2vw",
    left: "3vw",
    width: "7.5vw",
    height: "6vw",
    opacity: 0,
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
      opacity: { duration: 0.7 },
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const popUpText = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: {
      display: "none",
    },
  },
  open: {
    opacity: 1,
    display: "block",
    transition: {
      duration: 0.65,
      delay: 1,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popUpRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.pop_up',
          start: '100px top',
          onEnter:() => setIsOpen(false)
        }
      })
  })

  return (
    <div className="pop_up">
      <div
        className="pop_up__button"
        onClick={() => setIsOpen(!isOpen)}
      />
      <AnimatePresence>
        <motion.div
          className="pop_up__text"
          variants={popUp}
          animate={isOpen ? "open" : "closed"}
          initial="closed"
          ref={popUpRef}
        >
          <motion.div
            variants={popUpText}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
          >
            <button
              className="pop_up__button_close"
              onClick={() => setIsOpen(false)}
            />
            <p>
              More than 3.000 nft artists, validators, gamers, streamers and our
              investor friends from all over the world are involved in the
              closed beta testing of the project. Access to the game is already
              open to all those who have received an invitation to participate
              in the closed beta, as well as those who have been contacted by
              our staff in person. Just download the game and enter your
              invitation code when you log in.
            </p>
            <p>
              Also, we have prepared unique gifts for all beta-testers of the
              project! You will receive a gift immediately after authorization
              in the game! Become a pioneer - take your first steps in the
              Solaris meta-universe today!
            </p>
          </motion.div>
        </motion.div>
          <motion.div
            variants={popUpText}
            animate={isOpen ? "open" : "closed"}
            initial="closed"
            className="pop_up__blur"
            key={2}
          />
      </AnimatePresence>
    </div>
  );
};

export default PopUp;
