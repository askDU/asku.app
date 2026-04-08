"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function AnimatedHero({
  title,
  words,
  subtitle,
}: {
  title: string;
  words: string[];
  subtitle?: string;
}) {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(() => words, [words]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="flex gap-4 flex-col items-center">
        <h1 className="text-4xl md:text-6xl max-w-2xl tracking-tighter text-center font-bold">
          <span className="text-white/90">{title}</span>
          <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
            &nbsp;
            {titles.map((word, index) => (
              <motion.span
                key={index}
                className="absolute font-bold text-primary"
                initial={{ opacity: 0, y: "-100" }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  titleNumber === index
                    ? { y: 0, opacity: 1 }
                    : {
                        y: titleNumber > index ? -150 : 150,
                        opacity: 0,
                      }
                }
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>
        {subtitle && (
          <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-md text-center">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

export { AnimatedHero };
