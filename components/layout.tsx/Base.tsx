import Header from "components/Header";
import Footer from "components/Footer";

import styles from "./Base.module.scss";
import { HTMLAttributes } from "react";
import FBEFab from "./FBEFab";

export type BaseProps = HTMLAttributes<HTMLDivElement> & {
    header?: boolean;
    footer?: boolean;
    fab?: boolean;
};
export default function Base(props: BaseProps) {
    const {
        children,
        header = true,
        footer = true,
        fab = true,
        ...other
    } = props;
    return (
        <div className={styles.base} {...other}>
            {header ? <Header /> : ""}

            <main>{children}</main>

            {footer ? <Footer /> : ""}

            {fab ? <FBEFab /> : ""}
        </div>
    );
}
