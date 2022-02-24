import pages from "datasets/pages";
import React, { FC, } from "react";
import Link from "./Link";

import styles from "./scss/SideBar.module.scss";

export const SideBarItem :FC<{}> = ({children})=>{
    return (
        <div className={styles.sidebarItem}>
            {children}
        </div>
    ) ;
} ;

export type SideBarProps = {
};
const SideBar: FC<SideBarProps> = ({children}) => {
    return (
        <div className={styles.sidebar}>
            <SideBarItem>
                <h3>メニュー</h3>
                <ul>
                    {pages.map(page=>(
                        <li key={page.label}>
                            <Link href={page.link}>
                                {page.jpName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SideBarItem>
            {children}
        </div>
    );
};

export default SideBar;
