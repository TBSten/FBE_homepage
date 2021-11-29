import Base from "components/layout.tsx/Base";
import BaseContent from "components/layout.tsx/BaseContent";
import Link from "components/Link";
import Section from "components/Section";
import { DocsData, getTopDocs } from "lib/docs";
import { GetServerSideProps } from "next";
import React, { FC } from "react";

interface DocsProps {
    docs: DocsData[];
}

function DocLi({doc}:{doc:DocsData}) {
    return (
        <li key={doc.id}>
            <Link href={`/docs/${doc.id}`}>{doc.title}</Link>
            <ul>
                {doc.pages?
                doc.pages.map(page=>(
                    <DocLi doc={page} key={page.id}/>
                ))
                :
                ""}
            </ul>
        </li>
    );
}
const Docs: FC<DocsProps> = ({ docs }) => {
    return (
        <Base>
            <BaseContent>
                <Section>
                    <h1>総合ドキュメント</h1>
                    ここではFBEにおける
                    基本操作記号のオプションなどの各要素について
                    詳細に解説します。
                </Section>
                <Section>
                    <h2>目次</h2>
                    <ul>
                        {docs.map(doc=>(
                            <DocLi doc={doc} key={doc.id}/>
                        ))}
                    </ul>
                </Section>
            </BaseContent>
        </Base>
    );
};
export default Docs;
export const getServerSideProps: GetServerSideProps<DocsProps> = async (
    ctx
) => {
    const docs = getTopDocs();
    return {
        props: {
            docs,
        },
    };
};
