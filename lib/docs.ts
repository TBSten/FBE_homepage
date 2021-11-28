import fs from "fs";
import path from "path";

export interface DocsData {
    id: string;
    title: string;
    pages?:DocsData[];
}

export function getDocs(): DocsData[] {
    const filePath = path.join(process.cwd(), "datasets", "docs", "docs.json");
    const json = fs.readFileSync(filePath, { encoding: "utf-8" });
    const docs = JSON.parse(json);
    const vs = docs.values as DocsData[];
    function eacher(doc:DocsData,callback:(doc:DocsData)=>void){
        callback(doc);
        if(doc.pages){
            doc.pages.forEach((page)=>{
                eacher(page,callback);
            });
        }
    }
    const ans = vs.reduce((p,doc)=>{
        eacher(doc,(d)=>{ p.push(d) });
        return p ;
    },[] as DocsData[]);
    return ans ;
}

export function getDoc(id: string): DocsData | null {
    const docs = getDocs();
    let ans: null | DocsData = null;
    docs.forEach((doc) => {
        if (id === doc.id) {
            ans = doc;
        }
    });
    return ans;
}

export function isExistDoc(id:string){
    try{
        if(getDoc(id)){
            return true ;
        }else{
            return false ;
        }
    }catch(e){
        return false ;
    }
}
export function getContent(id: string) {
    const doc = getDoc(id);
    if (doc) {
        const id = doc.id;
        const filePath = path.join(
            process.cwd(),
            "datasets",
            "docs",
            id + ".md"
        );
        const fileText = fs.readFileSync(filePath, { encoding: "utf-8" });
        return fileText;
    } else {
        throw new Error("unvalid id:" + id);
    }
}

export function getPrevNext(
    id: string
): { prev: DocsData|null; next: DocsData|null } | null {
    const docs = getDocs();
    let idx = -1;
    docs.forEach((doc, i) => {
        if (doc.id === id) {
            idx = i;
        }
    });
    if (0 <= idx && idx <= docs.length-1) {
        let prev = idx >= 1 ? docs[idx-1]:null;
        let next = idx <= docs.length-2 ? docs[idx+1]:null;
        return {
            prev,
            next,
        } ;
    } else {
        return null;
    }
}
