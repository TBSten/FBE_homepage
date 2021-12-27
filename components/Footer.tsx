import pages from "datasets/pages";
import React, { useEffect, useState } from "react";
import { breakpoint } from "style/media";
import Link from "./Link";

import styles from "./scss/Footer.module.scss";

export default function Footer() {
    return (
        <footer className={[styles.footer].join(" ")}>
            <span>FBE</span>
            <ul>
                {pages.map((page) => (
                    <li key={page.label}>
                        <Link href={page.link}>{page.label}</Link>
                    </li>
                ))}
            </ul>
        </footer>
    );
}
