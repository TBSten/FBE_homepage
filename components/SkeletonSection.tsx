import useClasses from "lib/hooks/useClasses";
import React, { ReactNode } from "react";
import Section, { SectionProps } from "./Section";

import styles from "./scss/SkeletonSection.module.scss" ;

export type SkeletonSectionProps = SectionProps & {
}
export default function SkeletonSection(props:SkeletonSectionProps){
    const [_,classesChange,className] = useClasses([styles.con,props.className]); 
    return (
        <Section className={className} {...props} >
            {props.children}
        </Section>
    ) ;
}
