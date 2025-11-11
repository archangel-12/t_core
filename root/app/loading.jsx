"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const triangleVariants = {
    initial: {
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center">
      <motion.svg
        className="w-16 h-16 mb-8"
        viewBox="0 0 76 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M37.5274 0L75.0548 65H0L37.5274 0Z"
          stroke="#000000"
          strokeWidth="2"
          variants={triangleVariants}
          initial="initial"
          animate="animate"
        />
      </motion.svg>
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-black"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <p className="text-white text-sm mb-2">Welcome to Terra Incognita....</p>
      <p className="text-gray-400 text-xs text-center max-w-xs">
        When we win, do not forget that these people want you broke, dead, your
        kids raped and brainwashed, and they think it's funny{""}
        {""} ~ Sam Hyde
        <br />
        Made with ❤️ by{" "}
        <a
          className="text-sky-400"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/r3yanson/"
        >
          Matthew Alexander
        </a>
      </p>
    </div>
  );
}