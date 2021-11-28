import React, { FC } from "react";
import Section, { SectionProps } from "./Section";

import styles from "./scss/ContentSection.module.scss";

export type ContentSectionProps = SectionProps & {
};
const ContentSection :FC<ContentSectionProps> =(props)=>{
    return (
        <Section {...props} className={styles.section}>
            <div className={styles.content}>
                {props.children}
            </div>
        </Section>
    ) ;
}
export default ContentSection ;


