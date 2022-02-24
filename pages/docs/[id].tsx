import Base from "components/layout.tsx/Base";
import BaseContent from "components/layout.tsx/BaseContent";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC } from "react";
import { DocsData, getContent, getDocs, getTopDocs } from "lib/docs";
import Section from "components/Section";
import { MyMarkdown } from "lib/mymarkdown";
import LinkButton from "components/LinkButton";
import { getPrevNext } from "lib/docs";

import styles from "./scss/[id].module.scss";
import Head from "next/head";
import { DocsSideBar } from ".";

interface PrevNextProps {
    prev: DocsData | null;
    next: DocsData | null;
}
const PrevNext: FC<PrevNextProps> = ({ prev, next }) => {
    const prevHref = `/docs/${prev ? prev.id : ""}`;
    const nextHref = `/docs/${next ? next.id : ""}`;
    return (
        <div className={styles.prevNext}>
            <LinkButton href={prevHref} disable={!prev ? true : false}>
                前
            </LinkButton>
            |
            <LinkButton href={nextHref} disable={!next ? true : false}>
                次
            </LinkButton>
        </div>
    );
};

interface DocProps {
    content: string;
    prev: DocsData | null;
    next: DocsData | null;
    docs:DocsData[];
}
const Doc: FC<DocProps> = ({ content, prev, next ,docs}) => {
    return (
        <Base>
            <Head>
                <title>project FBE - ドキュメント -</title>
                <meta
                    name="description"
                    content="Flowchart Build Executor はフローチャートを 作成 ・  実行する ためのWebツールです。ブラウザのみで動作し、アカウント登録の必要はありません。"
                />
            </Head>

            <BaseContent side={<DocsSideBar docs={docs}/>}>
                <Section>
                    <h1>総合ドキュメント</h1>
                    ここではFBEにおける
                    基本操作記号のオプションなどの各要素について
                    詳細に解説します。
                </Section>
                <PrevNext prev={prev} next={next} />
                <MyMarkdown>{content}</MyMarkdown>
                <PrevNext prev={prev} next={next} />
            </BaseContent>
        </Base>
    );
};

export default Doc;
// export const getServerSideProps: GetServerSideProps<DocProps> = async (ctx) => {
//     try {
//         const id = ctx.params.id as string;
//         const content = getContent(id);
//         const { prev, next } = getPrevNext(id);
//         return {
//             props: {
//                 content,
//                 prev,
//                 next,
//             },
//         };
//     } catch (e) {
//         return {
//             notFound: true,
//         };
//     }
// };

export const getStaticProps: GetStaticProps<DocProps> = async (ctx) => {
    try {
        const id = ctx.params.id as string;
        const content = getContent(id);
        const { prev, next } = getPrevNext(id);
        const docs = getTopDocs() ;
        return {
            props: {
                content,
                prev,
                next,
                docs,
            },
        };
    } catch (e) {
        return {
            notFound: true,
        };
    }
};

export const getStaticPaths: GetStaticPaths = async (ctx)=>{
    const paths = getDocs().map(doc=>`/docs/${doc.id}`) ;
    return {
        paths,
        fallback: false,
    } ;
} ;


