"use client";

import { TypeAnimation } from "react-type-animation";

const TypingAnimate = () => {
  return (
    <TypeAnimation
        sequence={[
            'Machine Learning Enthusiast',
            1000,
            'Web Development Enthusiast',
            1000,
            'Mobile Development Enthusiast',
            1000,
            'Cyber Security Enthusiast',
            1000,
            'Continuous Learning Enthusiast',
            1000
        ]}
        wrapper="span"
        speed={50}
        style={{ }}
        repeat={Infinity}
    />
  )
}

export default TypingAnimate