// Shared animation variants for consistent animations across the site

export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 60, opacity: 0 }
}

export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 }
}

export const textReveal = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" }
}

export const letterAnimation = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 }
}

export const wordAnimation = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 }
}

export const containerAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export const cardHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
}

export const buttonHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400
    }
  }
}

// Animation for text that splits into characters
export const createLetterAnimations = (text) => {
  return text.split("").map((char, index) => ({
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1
      }
    }
  }))
}

// Scroll-triggered animations
export const scrollReveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  viewport: { once: true, margin: "-100px" }
}

// Page transition animations
export const pageTransition = {
  initial: { opacity: 0, x: -200 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    x: 200,
    transition: {
      duration: 0.5,
      ease: "easeIn"
    }
  }
} 