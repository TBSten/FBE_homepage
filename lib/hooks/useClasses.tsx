import { useState } from "react";

function deepEqualsArray<T>(array1: T[], array2: T[]): boolean {
    if (!Array.isArray(array1)) return false;
    if (!Array.isArray(array2)) return false;
    if (array1.length != array2.length) return false;
    for (let i = 0, n = array1.length; i < n; ++i) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}
export default function useClasses(init: string[] = []) {
    const [classes, setClasses] = useState<string[]>(init);
    function addClass(...newClass: string[]) {
        setClasses((prev) => {
            const set = new Set([...prev, ...newClass]);
            const ans = Array.from(set);
            if (deepEqualsArray(prev, ans)) {
                return prev;
            }
            return ans;
        });
    }
    function removeClass(...oldClasses: string[]) {
        setClasses((prev) => {
            const ans = prev.filter((c) => !oldClasses.includes(c)) ;
            if(deepEqualsArray(prev,ans)){
                return prev ;
            }
            return ans ;
        });
    }
    const getClassName = classes.join(" ");
    return [
        classes,
        {
            set: setClasses,
            add: addClass,
            remove: removeClass,
        },
        getClassName,
    ] as const;
}
