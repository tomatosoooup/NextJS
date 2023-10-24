import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface IProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  options?: {
    opc?: number;
    x?: number;
    del?: number;
    bottom?: number;
    pos?: string;
  };
}

export const Reveal = ({
  children,
  width = "fit-content",
  options,
}: IProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ width }}>
      <motion.div
        variants={{
          hidden: {
            opacity: options.opc || 0,
            x: options.x || 0,
            y: options.bottom || 0,
          },
          visible: {
            opacity: 1,
            x: 0,
            y: 0,
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
