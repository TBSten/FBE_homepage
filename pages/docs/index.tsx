import Base from "components/layout.tsx/Base";
import BaseContent from "components/layout.tsx/BaseContent";
import Link from "components/Link";
import Section from "components/Section";
import { SideBarItem } from "components/SideBar";
import { DocsData, getDocs, getTopDocs } from "lib/docs";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import React, { FC } from "react";

interface DocsProps {
    docs: DocsData[];
}

export function DocLi({ doc }: { doc: DocsData }) {
    return (
        <li key={doc.id}>
            <Link href={`/docs/${doc.id}`}>{doc.title}</Link>
            <ul>
                {doc.pages
                    ? doc.pages.map((page) => (
                          <DocLi doc={page} key={page.id} />
                      ))
                    : ""}
            </ul>
        </li>
    );
}
export const DocsSideBar :FC<{docs:DocsData[]}> = ({docs})=>{
    return (
        <SideBarItem>
            <h3>ドキュメント</h3>
            <ul>
                {docs.map(doc=>(
                    <DocLi doc={doc} key={doc.id}/>
                ))}
            </ul>
        </SideBarItem>
    ) ;
} ;
const Docs: FC<DocsProps> = ({ docs }) => {
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
                <Section>
                    <h2>目次</h2>
                    <ul>
                        {docs.map((doc) => (
                            <DocLi doc={doc} key={doc.id} />
                        ))}
                    </ul>
                </Section>
            </BaseContent>
        </Base>
    );
};
export default Docs;
// export const getServerSideProps: GetServerSideProps<DocsProps> = async (
//     ctx
// ) => {
//     const docs = getTopDocs();
//     return {
//         props: {
//             docs,
//         },
//     };
// };

export const getStaticProps: GetStaticProps<DocsProps> = async (
    ctx
) => {
    const docs = getTopDocs();
    return {
        props: {
            docs,
        },
    };
};






