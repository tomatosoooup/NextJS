import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface IProps {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  options?: Record<string, any>;
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
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: options.opc,
            x: options.x,
          },
          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 1, delay: options.del }}
      >
        {children}
      </motion.div>
    </div>
  );
};
