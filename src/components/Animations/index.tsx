import {motion, useAnimation} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import React, { useEffect} from "react";

// Constante para ajustar o threshold
const THRESHOLD = 0.3;

// Definir os estados iniciais para cada tipo de animação
const ANIMATION_VARIANTS = {
    FadeInLeft: { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
    FadeInRight: { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
    FadeInLeftUp: { initial: { opacity: 0, x: -100, y: 100 }, animate: { opacity: 1, x: 0, y: 0 } },
    FadeInLeftDown: { initial: { opacity: 0, x: -100, y: -100 }, animate: { opacity: 1, x: 0, y: 0 } },
    FadeInRightUp: { initial: { opacity: 0, x: 100, y: 100 }, animate: { opacity: 1, x: 0, y: 0 } },
    FadeInRightDown: { initial: { opacity: 0, x: 100, y: -100 }, animate: { opacity: 1, x: 0, y: 0 } },
    Fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
    FadeFlipRight: { initial: { opacity: 0, rotateY: 90 }, animate: { opacity: 1, rotateY: 0 } },
    FadeFlipLeft: { initial: { opacity: 0, rotateY: -90 }, animate: { opacity: 1, rotateY: 0 } },
};
export type AnimationType = keyof typeof ANIMATION_VARIANTS;
interface AnimatedComponentProps extends React.PropsWithChildren {
    animationType: AnimationType; // Tipos permitidos
}

export const AnimatedComponent: React.FC<AnimatedComponentProps> = ({
                                                                 animationType,
                                                                 children,
                                                             }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: THRESHOLD });

    useEffect(() => {
        if (inView) {
            controls.start(ANIMATION_VARIANTS[animationType].animate);
        }
    }, [controls, inView, animationType]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial={ANIMATION_VARIANTS[animationType].initial}
            transition={{ duration: 0.65, ease: "easeInOut" }}
        >
            {children}
        </motion.div>
    );
};


