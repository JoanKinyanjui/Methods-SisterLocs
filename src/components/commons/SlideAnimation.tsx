import { motion } from 'framer-motion';


type SlideAnimationProps = {
  direction: 'left' | 'right';
  children: React.ReactNode;
};

const SlideAnimation = ({ direction , children } :SlideAnimationProps) => {
  const variants = {
    hidden: { x: direction === 'left' ? '-100vw' : '100vw' },
    visible: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default SlideAnimation;
