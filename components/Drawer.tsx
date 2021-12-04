import { FC, useState } from "react";

import styles from "./scss/Drawer.module.scss" ;

function deepEqualsArray<T>(array1: T[], array2: T[]): boolean {
    if (!Array.isArray(array1)) return false;
    if (!Array.isArray(array2)) return false;
    if (array1.length != array2.length) return false;
    for (let i = 0, n = array1.length; i < n; ++i) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}
function useClasses(...init:string[]){
    const [list,setList] = useState(init);
    function add(...newClasses:string[]){
        setList(prev=>{
            const set = new Set([...prev, ...newClasses]);
            const ans = Array.from(set);
            if(deepEqualsArray(prev,ans)){
                return prev ;
            }
            return ans ;
        });
    }
    function remove(removeClass:string){
        setList(prev=>{
            const ans = prev.filter(c=>c!==removeClass);
            if(deepEqualsArray(prev,ans)){
                return prev ;
            }
            return ans ;
        });
    }
    return {
        toArray:()=>list,
        toClassName:()=>list.join(" "),
        add,
        remove,
    } ;
}
export type DrawerProps = {
    open :boolean;
    onClose?:()=>void ;
} ;
const Drawer :FC<DrawerProps> = ({open,onClose=()=>{},children})=>{
    let classList = styles.back ;
    if(open) {
        classList+=" "+styles.open ;
    }else{
        classList+=" "+styles.close ;
    }
    return (
        <div className={classList} onClick={onClose}>
            <div className={styles.content} onClickCapture={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    ) ;
};
export default Drawer ;

