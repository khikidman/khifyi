import { motion, useScroll, useTransform } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

/* Recursively extract text from React nodes */
const extractText = (children: ReactNode): string => {
  let result = "";

  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    children.forEach(child => {
      result += extractText(child);
    });
  }

  return result;
};

const MatrixDissolveText = ({ children }: Props) => {
  const { scrollY } = useScroll();

  const text = extractText(children);

  return (
    <div className="flex flex-wrap">
      {text.split("").map((char, i) => {

        const y = useTransform(
          scrollY,
          [0, 400],
          [0, -120 - i * 3]
        );

        const opacity = useTransform(
          scrollY,
          [0, 300],
          [1, 0]
        );

        return (
          <motion.span
            key={i}
            style={{ y, opacity }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        );
      })}
    </div>
  );
};

export default MatrixDissolveText;