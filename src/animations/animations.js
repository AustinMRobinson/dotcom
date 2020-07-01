export const easing = [0.6, -0.05, 0.01, 0.99];

export const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
          duration: 0.4,
          ease: easing
      }
    }
};

export const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
          duration: 0.4,
          ease: easing
      }
    }
};

export const fadeStagger = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: easing,
            staggerChildren: 0.2,
            delayChildren: 0.4,
        }
    }
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};