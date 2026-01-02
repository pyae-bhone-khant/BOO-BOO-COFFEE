"use client";
import { motion } from "framer-motion";

const images = [
  { src: "/img/shop1.avif", x: -390, rotate: -15, scale: 1.05, delay: 0 },
  { src: "/img/shop2.avif", x: -145, rotate: 15, scale: 1.1, delay: 0.1 },
  { src: "/img/shop3.jpg", x: 145, rotate: -15, scale: 1.1, delay: 0.2 },
  { src: "/img/shop4.avif", x: 390, rotate: 15, scale: 1.05, delay: 0.3 },
];

export default function ImageFan() {
  return (
    <div className="mt-10 flex justify-center items-center relative h-[420px]">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img.src}
          className="w-60 h-70 rounded-3xl shadow-2xl absolute"
          initial={{
            opacity: 0,
            scale: 0.75,
            x: 0,
          }}
          animate={{
            opacity: [0, 1, 1],
            scale: [0.75, img.scale, img.scale], // 🧠 အရှေ့ကို အရင်
            x: [0, 0, img.x],                    // 👉 ပြီးမှ wide fan-out
            rotate: img.rotate,
          }}
          transition={{
            duration: 1.1,
            delay: img.delay,
            times: [0, 0.4, 1],
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
