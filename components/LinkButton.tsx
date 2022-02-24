import { FC, HTMLAttributes, ReactChildren, ReactNode } from "react";
import Link from "./Link";

import styles from "./scss/LinkButton.module.scss";

export type LinkButtonProps = HTMLAttributes<HTMLDivElement> & {
    href:string;
    newTab?:boolean;
    disable?:boolean;
} ;
const LinkButton: FC<LinkButtonProps> = (props) => {
    const { 
        href, 
        children, 
        newTab, 
        className, 
        disable=false, ...other} = props ;
    const child = (
        <div className={className+" "+styles.button+" "+(disable?styles.disable:"")} {...other}>
            {children}
        </div>
    ) ;
    if(disable){
        return child ;
    }
    return (
        <Link href={href} newTab={newTab}>
            {child}
        </Link>
    );
};
export default LinkButton;
