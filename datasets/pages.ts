

export interface PageData{
    label:string;
    jpName:string;
    link:string;
}
const pages :PageData[] =  [
    {
        label:"TOP",
        jpName:"トップ",
        link:"/",
    },
    {
        label:"TUTORIAL",
        jpName:"チュートリアル",
        link:"/getstart",
    },
    {
        label:"DOCS",
        jpName:"ドキュメント",
        link:"/docs",
    },
    {
        label:"CREDIT",
        jpName:"クレジット",
        link:"/credit",
    },
] ;


export default pages ;


