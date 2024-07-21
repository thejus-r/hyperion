import { motion, Variants } from "framer-motion";
const TEXT =
  "Building timeless products that are outstanding with true craftsmanship.";

// To set the delay of each letter
const STAGGERDELAY = 0.15;

const masterVariants: Variants = {
  initial: {},
  animate: {},
};

const letterVariants: Variants = {
  initial: {
    y: 20,
    filter: "blur(20px)",
    opacity: 0,
  },
  animate: {
    y: 0,
    filter: "blur(0px)",
    opacity: 1,
  },
};

export default function BannerText() {
  return (
    <motion.div
      className="flex flex-wrap gap-2 h-fit justify-center sm:justify-start"
      variants={masterVariants}
      initial="initial"
      animate="animate"
      style={{
        lineHeight: 1,
      }}
    >
      {TEXT.split(" ").map((letter, i) => (
        <motion.span
          variants={letterVariants}
          transition={{
            ease: "easeOut",
            delay: i * STAGGERDELAY,
            duration: 0.5,
          }}
          className="inline-block"
          key={i}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
