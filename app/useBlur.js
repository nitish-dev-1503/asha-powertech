import { motion, useInView } from "motion/react";
import { useMemo, useRef } from "react";

/**
 * useBlur - Returns a motion span with blur animation for each character,
 * animating when the element comes into view. Words will wrap if needed.
 */
export function useBlur(text, options = {}) {
  const {
    initial = { opacity: 0, filter: "blur(8px)", y: 12 },
    animate = { opacity: 1, filter: "blur(0px)", y: 0 },
    duration = 0.6,
    ease = "easeOut",
    staggerChildren = 0.05,
    className = "",
    amount = 0.2,
    once = true,
  } = options;

  // Split text into words, then each word into characters
  const words = useMemo(() => text.split(" "), [text]);
  const ref = useRef(null);
  const inView = useInView(ref, { amount, once });

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ display: "inline", whiteSpace: "normal", wordBreak: "break-word" }}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={{
        initial: {},
        animate: {
          transition: { staggerChildren }
        }
      }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {word.split("").map((char, ci) => (
            <motion.span
              key={ci}
              variants={{ initial, animate }}
              transition={{ duration, ease }}
              style={{ display: "inline-block" }}
            >
              {char}
            </motion.span>
          ))}
          {/* Add space after each word except the last */}
          {wi < words.length - 1 && <span>{" "}</span>}
        </span>
      ))}
    </motion.span>
  );
}