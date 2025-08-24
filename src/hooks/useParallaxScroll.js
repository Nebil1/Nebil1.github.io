import { useTransform } from "framer-motion";

export default function useParallaxScroll(scrollYProgress, offset = 0) {
  // Different parallax speeds for layered depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50 + offset]); // Slow
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100 + offset]); // Medium  
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200 + offset]); // Fast
  
  // Rotation for dynamic feel
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  
  // Scale for depth
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  
  return { y1, y2, y3, rotate, scale };
}