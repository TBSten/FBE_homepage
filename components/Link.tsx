import NextLink from "next/link";
import React, { FC, HTMLAttributes } from "react";
import styles from "./scss/Link.module.scss";


export type LinkProps = HTMLAttributes<HTMLAnchorElement> & {
    href: string;
    newTab?: boolean;
};
const Link: FC<LinkProps> = (props) => {
    const { href, newTab = false, children, ...other } = props;
    if (newTab) {
        return (
            <a
                className={styles.link}
                target="_blank"
                rel="noreferrer"
                href={props.href}
                {...other}
            >
                {children}
            </a>
        );
    }
    if (!href) {
        return (
            <></>
        );
    }
    return (
        <NextLink href={href}>
            <a className={styles.link} {...other}>
                {children}
            </a>
        </NextLink>
    );
}

export default Link;

