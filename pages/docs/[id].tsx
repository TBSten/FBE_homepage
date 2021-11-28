import Base from "components/layout.tsx/Base";
import BaseContent from "components/layout.tsx/BaseContent";
import { GetServerSideProps } from "next";
import React, { FC } from "react";
import { DocsData, getContent } from "lib/docs";
import Section from "components/Section";
import { MyMarkdown } from "lib/mymarkdown";
import LinkButton from "components/LinkButton";
import { getPrevNext } from "lib/docs";

import styles from "./scss/[id].module.scss" ;

interface PrevNextProps {
    prev:DocsData|null;
    next:DocsData|null;
}
const PrevNext:FC<PrevNextProps> =({prev,next})=>{
    const prevHref = `/docs/${prev?prev.id:""}` ;
    const nextHref = `/docs/${next?next.id:""}` ;
    return (
        <div className={styles.prevNext}>
            <LinkButton 
                href={prevHref}
                disable={!prev?true:false}>
                前</LinkButton>
            |
            <LinkButton 
                href={nextHref}
                disable={!next?true:false}>
                次</LinkButton>
        </div>
    ) ;
} ;

interface DocProps {
    content:string;
    prev:DocsData|null;
    next:DocsData|null;
}
const Doc :FC<DocProps> = ({content,prev,next})=>{
    return (
        <Base>
            <BaseContent>
                <Section>
                    <h1>総合ドキュメント</h1>
                    ここではFBEにおける
                    基本操作記号のオプションなどの各要素について
                    詳細に解説します。
                </Section>
                <PrevNext prev={prev} next={next}/>
                <MyMarkdown>
                    {content}
                </MyMarkdown>                
                <PrevNext prev={prev} next={next}/>

            </BaseContent>
        </Base>
    ) ;
};

export default Doc ;
export const getServerSideProps :GetServerSideProps<DocProps> = async (ctx)=>{
    try{
        const id = ctx.params.id as string ;
        const content = getContent(id) ;
        const {prev,next} = getPrevNext(id);
        return {
            props:{
                content,
                prev,
                next,
            },
        } ;
    }catch(e){
        return {
            notFound:true,
        } ;
    }
} ;



