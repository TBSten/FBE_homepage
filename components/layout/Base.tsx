import Header from "components/Header";
import Footer from "components/Footer";

import styles from "./Base.module.scss";
import { HTMLAttributes } from "react";
import ToFBE from "components/ToFBE";

export type BaseProps = HTMLAttributes<HTMLDivElement> & {
    header?: boolean;
    footer?: boolean;
};
export default function Base(props: BaseProps) {
    const {
        children,
        header = true,
        footer = true,
        ...other
    } = props;
    return (
        <div className={styles.base} {...other}>
            {header ?
                <Header />
                : ""}

            <main>
                {children}
            </main>

            {footer ?
                <Footer />
                : ""}

            <ToFBE />

        </div>
    );
}

