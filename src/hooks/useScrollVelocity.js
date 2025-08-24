import { useMotionValue, useTransform, useVelocity } from "framer-motion";
import { useEffect } from "react";

export default function useScrollVelocity(containerRef) {
  const scrollY = useMotionValue(0);
  const scrollVelocity = useVelocity(scrollY);
  
  // Transform velocity to blur/scale values
  const blur = useTransform(scrollVelocity, [-2000, 0, 2000], [10, 0, 10]);
  const scale = useTransform(scrollVelocity, [-2000, 0, 2000], [0.95, 1, 0.95]);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const updateScrollY = () => scrollY.set(container.scrollTop);
    container.addEventListener("scroll", updateScrollY, { passive: true });
    
    return () => container.removeEventListener("scroll", updateScrollY);
  }, [scrollY, containerRef]);
  
  return { blur, scale, scrollVelocity };
}