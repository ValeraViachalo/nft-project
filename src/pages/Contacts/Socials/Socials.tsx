import { motion } from "framer-motion";
import React, { useState, FC } from "react";

import "./Socials.scss";

interface Button {
  id: number;
  name: string;
  color: string;
  link: string;
  isHovered?: boolean;
}

const section = {
  open: {
    display: "block",
    top: "-20vh",
    transition: {
      duration: 0.8,
      type: "tween",
      ease: [0.53, -0.01, 0.33, 1.03],
    },
    transform: "none",
    left: "0",
  },
  closed: {
    display: "none",
    top: "110vh",
  },
};

type Props = {
  isOpen: boolean;
};

const Socials: FC<Props> = ({ isOpen }) => {
  const [buttonData, setButtonData] = useState<Button[]>([
    {
      id: 1,
      name: "Discord",
      color: "#7289DA",
      link: "https://discord.gg/CBYhg2k5",
    },
    {
      id: 2,
      name: "Twitter",
      color: "#1DA1F3",
      link: "https://twitter.com/SOLARIS_MV",
    },
    {
      id: 3,
      name: "YouTube",
      color: "#F11D1D",
      link: "#",
    },
    {
      id: 4,
      name: "Telegram",
      color: "#0174AD",
      link: "https://t.me/+lvFCT39s0DYzMTM0",
    },
  ]);

  const handleHover = (id: number) => {
    setButtonData((prevData) =>
      prevData.map((button) =>
        button.id === id ? { ...button, isHovered: true } : button
      )
    );
  };

  const handleLeave = (id: number) => {
    setButtonData((prevData) =>
      prevData.map((button) =>
        button.id === id ? { ...button, isHovered: false } : button
      )
    );
  };

  return (
    <motion.section
      className="socials"
      variants={section}
      animate={isOpen ? "open" : "closed"}
      initial="closed"
    >
      <div className="container">
        <h1 className="bold socials__title">FOLLOW US ON SOCIAL MEDIA</h1>

        <ul className="socials__list">
          {buttonData.map((button) => (
            <a
              className="socials__link"
              key={button.id}
              href={button.link}
              style={{ backgroundColor: button.isHovered ? button.color : "" }}
              onMouseEnter={() => handleHover(button.id)}
              onMouseLeave={() => handleLeave(button.id)}
            >
              {button.name}
            </a>
          ))}
        </ul>

        <div className="socials__text">
          <div className="socials__text_top">
            <p>
              Your feedback plays a crucial role in the development and
              improvement of our metaverse. Your opinions, comments, and
              suggestions help us understand what is working well and what needs
              further refinement.
            </p>
            <p>
              We also value your overall opinion of our work. If you have any
              suggestions for improving our services, we are ready to listen to
              them and make the necessary changes. Your feedback is a valuable
              tool for us that helps us grow and evolve.
            </p>
          </div>
          <div className="socials__text_bottom">
            <p>
              We strive to create a metaverse that fully meets your expectations
              and needs. Your feedback helps us determine which features and
              capabilities should be added to make our platform even more
              convenient and useful for you.
            </p>

            <h2>
              Please do not hesitate to share your thoughts and ideas with us.
              We are always open to feedback and strive to make our metaverse
              better for all users. Thank you for your participation and
              support!
            </h2>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Socials;
