import { FC } from "react";

import styles from "./scss/Modal.module.scss" ;

interface ModalProps {
    open?:boolean;
} ;
const Modal :FC<ModalProps> = ({open=false,children,})=>{
    return(
        <div className={[
            styles.back,
            open?styles.open:styles.close,
        ].join(" ")}>
            {children}
        </div>
    ) ;
}

export default Modal ;

