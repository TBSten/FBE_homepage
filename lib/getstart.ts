import path from "path" ;
import fs from "fs" ;
import os from "os" ;


export interface GetstartData{
    title :string;
    id :string;
}

export function getGetstarts() :GetstartData[]{
    try{
        const filePath = path.join(
            process.cwd(),
            "datasets",
            "getstart",
            "getstart.json"
        );
        const getstarts = JSON.parse(fs.readFileSync(filePath,{encoding:"utf-8"}));
        const ans :GetstartData[] = getstarts.values ;
        return ans ;
    }catch(e){
        console.error("getstart.jsonの読み込みエラー")
        throw e ;
    }
}

export function getGetstart(id:string) :GetstartData|null{
    const all = getGetstarts() ;
    let ans:null|GetstartData = all.reduce((p,getstart)=>{
        if(getstart.id === id){
            return getstart ;
        }
        return p ;
    },null);
    return ans ;
}

export function getContent(id:string){
    const getstart = getGetstart(id);
    const mdPath = path.join(
        process.cwd(),
        "datasets","getstart",getstart.id+".md"
    );
    const fileText = fs.readFileSync(mdPath,{encoding:"utf-8"});
    return fileText ;
}
export function getPrev(id:string) :GetstartData|null{
    const getstarts = getGetstarts();
    let idx = -1 ;
    getstarts.forEach((gs,i)=>{
        if(id === gs.id){
            idx = i ;
        }
    });
    // console.log("---",idx)
    if(idx >= 0){
        if(idx === 0){
            //先頭
            return null ;
        }else{
            return getstarts[idx-1] ;
        }
    }else{
        console.error(idx)
        throw new Error("not exits getstart :"+id) ;
    }
}

export function getNext(id:string) :GetstartData|null{
    const getstarts = getGetstarts();
    let idx = -1 ;
    getstarts.forEach((gs,i)=>{
        if(id === gs.id){
            idx = i ;
        }
    });
    console.log("---",idx)
    if(idx >= 0){
        if(idx === getstarts.length-1){
            //最後
            return null ;
        }else{
            return getstarts[idx+1] ;
        }
    }else{
        console.error(idx)
        throw new Error("not exits getstart :"+id) ;
    }
}




