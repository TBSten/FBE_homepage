import Section, { SectionProps } from "./Section";

import styles from "./scss/TopSection.module.scss" ;

export type TopSectionProps = SectionProps & {
} ;
export default function TopSection(props:TopSectionProps){
    return (
        <Section className={styles.top}>
            {props.children}
        </Section>
    ) ;
}

