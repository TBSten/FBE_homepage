import { FC } from "react";
import Link from "./Link";

import styles from "./scss/Card.module.scss" ;

export type CardProps = {
    href?:string;
} ;
const Card :FC<CardProps> = (props)=>{
    const result = (
        <div className={styles.container+" card"}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>

    ) ;
    if(props.href){
        return (
            <Link href={props.href} className={styles.link}>
                {result}
            </Link>
        ) ;
    }
    return (
        result
    ) ;
};

export default Card ;





