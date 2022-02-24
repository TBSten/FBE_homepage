import { useState } from "react";


export default function useBoolState(init :boolean){
    const [st,setSt] = useState(init);
    function setTrue(){
        setSt(true);
    }
    function setFalse(){
        setSt(false);
    }
    function toggle(){
        setSt(prev=>!prev);
    }
    return [st,setSt,setTrue,setFalse,toggle] as const;
}


