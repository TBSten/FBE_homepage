import Link from "components/Link";
import conf from "lib/conf";
import { FC, } from "react";
import styles from "./FBEFab.module.scss";

export interface FBEFabProps {}

const FBEFab: FC<FBEFabProps> = ({}) => {
    return (
        <Link href={conf.FBE_URL} newTab>
            <div className={styles.fab}>
                <span>FBEへ</span>
                <span>ジャンプ</span>
            </div>
        </Link>
    );
};
export default FBEFab;
