import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number;
}

const Typewriter = ({ text, speed = 80 }: Props) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return (
    <span className="font-mono">
      {displayText}
      <span
  className="animate-cursor-blink ml-1 text-zinc-500 opacity-20 relative bottom-2.5 text-6xl"
>▌</span>
    </span>
  );
};

export default Typewriter;