import useClasses from "lib/hooks/useClasses";
import useScroll from "lib/hooks/useScroll";
import { FC, HTMLAttributes, useEffect, useRef, useState, } from "react";

import styles from "./scss/Section.module.scss" ;


export type SectionProps = {
} & HTMLAttributes<HTMLElement>;
const Section:FC<SectionProps> = (props)=>{
    const {children,className,...other} = props ;
    const ref = useRef<HTMLElement | null>(null);
    const [classes,classesChange] = useClasses(
        [className,styles.section]
    );
    useScroll((e)=>{
        if(ref.current){
            const scrollBase = 100 ;
            const top = ref.current.offsetTop ;
            const w1 = window.scrollY + window.innerHeight -scrollBase ;
            if(top < w1){
                classesChange.add(styles.open);
            }
        }
    });
    return (
        <section ref={ref} className={classes.join(" ")} {...other}>
            {children}
        </section>
    ) ;
}
export default Section ;

