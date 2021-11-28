import SideBar from "components/SideBar";
import { FC, ReactNode } from "react";

import styles from "./BaseContent.module.scss" ;

export type BaseContentProps = {
    side?:ReactNode;
} ;
const BaseContent:FC<BaseContentProps> = ({children,side})=>{
    return (
        <div className={styles.back}>
            <div className={styles.con}>
                <div className={styles.side}>
                    <SideBar >
                        {side}
                    </SideBar>
                </div>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </div>
    );
};
export default BaseContent ;

