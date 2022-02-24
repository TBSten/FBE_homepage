import React, { useRef } from "react";
import Image from "next/image";
import settings from "base-setting";
import Link from "./Link";
import useScroll from "lib/hooks/useScroll";
import useClasses from "lib/hooks/useClasses";
import img_menu from "image/icon-menu.png";
import useBoolState from "lib/hooks/useBoolState";
import Drawer from "./Drawer";

import styles from "./scss/Header.module.scss";
import pages from "datasets/pages";

const menus = pages;

export default function Header() {
    const [classes, classesChange, className] = useClasses([styles.header]);
    const [stickClasses, stickClassesChange, stickClassName] = useClasses([
        styles.stick,
    ]);
    const ref = useRef<HTMLElement | null>(null);
    const [isMenuOpen, setIsMenuOpen, handleOpenMenu, handleCloseMenu] =
        useBoolState(false);
    useScroll(() => {
        if (ref.current) {
            const bottom = ref.current.offsetTop + ref.current.offsetHeight;
            const w1 = window.scrollY;
            if (bottom < w1) {
                stickClassesChange.add(styles.open);
            } else {
                stickClassesChange.remove(styles.open);
            }
        }
    });
    return (
        <>
            <div>
                <div className={styles.dangerous}>
                    FBEv2.0がリリースされました！<br />
                    一部ドキュメントの更新が追いついていない箇所があります。
                </div>
                <header className={className} ref={ref}>
                    <span>
                        <Link href="/">{settings.title}</Link>
                    </span>
                    <ul>
                        {menus.map((menu) => (
                            <li key={menu.label}>
                                <Link href={menu.link}>{menu.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.icon} onClick={handleOpenMenu}>
                        <Image src={img_menu} alt="fbe image" />
                    </div>
                </header>
            </div>

            <div className={stickClassName}>
                <span className={styles.logo}>
                    <Link href="/">FBE</Link>
                </span>
                {/* <span className={styles.top} onClick={()=>window.scrollTo({top:0})}> */}
                <span className={styles.top} onClick={handleOpenMenu}>
                    MENU
                </span>
            </div>

            <Drawer open={isMenuOpen} onClose={handleCloseMenu}>
                <div className={styles.drawer}>
                    <h1>
                        <Link href="/">FlowchartBuildExecutor</Link>
                    </h1>
                    <ul>
                        {menus.map((menu) => (
                            <Link href={menu.link} className={styles.link} key={menu.label}>
                                <li>
                                    {menu.jpName}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </Drawer>
        </>
    );
}
