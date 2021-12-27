import pages from "datasets/pages";
import conf from "lib/conf";
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

function link(text:string,url:string){
    return {
        text,url,
    } ;
}
const links = [
    link("FBE",conf.FBE_URL),
    link("FBE リポジトリ",conf.FBE_REPO_URL),
] ;

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
            <SideBarItem>
                <h3>リンク</h3>
                <ul>
                    {links.map(link=>(
                        <li key={link.text}>
                            <Link href={link.url} newTab>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </SideBarItem>
        </div>
    );
};

export default SideBar;
