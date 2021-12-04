import React, { FC } from "react";
import Link from "./Link";

import styles from "./scss/LinedLink.module.scss" ;

export interface LineLinkProps{
    href:string;
}
const LineLink:FC<LineLinkProps> = ({children,href})=>{
    return (
        <Link href={href} className={styles.linedLink}>
            {children}
        </Link>
    ) ;
};
export default LineLink ;

