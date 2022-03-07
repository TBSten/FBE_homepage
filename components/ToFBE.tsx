import conf from "lib/conf";
import { FC } from "react";
import Link from "./Link";
import styles from "./scss/ToFBE.module.scss";

const ToFBE: FC<{}> = () => {
    return (
        <Link newTab href={conf.FBE_URL} className={styles.root}>
            FBEで<br />
            遊ぶ！
        </Link>
    );
};
export default ToFBE;
