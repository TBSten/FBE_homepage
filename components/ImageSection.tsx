import React, { FC } from "react";
import Image from "next/image";
import Section, { SectionProps } from "./Section";

import styles from "./scss/ImageSection.module.scss";

export type ImageSectionProps = SectionProps & {
    src: StaticImageData;
    reverse?: boolean;
};

const ImageSection: FC<ImageSectionProps> = (props) => {
    const { children, src, reverse = false, ...other } = props;
    return (
        <Section
            className={styles.con + ` ${reverse ? styles.reverse : ""}`}
            {...other}
        >
            {!reverse ? (
                <>
                    <div className={styles.detail}>{children}</div>
                    <div className={styles.img}>
                        <Image src={src} alt="fbe image"/>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.img}>
                        <Image src={src} alt="fbe image"/>
                    </div>
                    <div className={styles.detail}>{children}</div>
                </>
            )}
        </Section>
    );
};

export default ImageSection;
