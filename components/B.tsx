import { FC } from "react";

import styles from "./scss/B.module.scss" ;

export type BProps = {} ;
const B:FC<BProps> = ({children})=>{
    return (
        <b className={styles.b}>{children}</b>
    ) ;
}
export default B ;
