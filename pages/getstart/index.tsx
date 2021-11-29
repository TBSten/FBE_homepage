import Image from "next/image";

import B from "components/B";
import Base from "components/layout.tsx/Base";
import BaseContent from "components/layout.tsx/BaseContent";
import LinkButton from "components/LinkButton";
import Section from "components/Section";
import TopSection from "components/TopSection";
import conf from "lib/conf";
import React, { FC, VFC } from "react";

import styles from "./scss/getstart.module.scss";

import img_ss_04 from "image/ss_04.png";
import img_ss_05 from "image/ss_05.png";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import { getGetstarts, GetstartData } from "lib/getstart";
import Link from "components/Link";
import Head from "next/head";

function ImgLine({ src }) {
    return (
        <div className={styles.imgLine}>
            <div className={styles.imgCon}>
                <Image src={src} alt="fbe image" />
            </div>
        </div>
    );
}

interface GetStartProps {
    getstarts: GetstartData[];
}
const GetStart: FC<GetStartProps> = ({ getstarts }) => {
    return (
        <Base>
            <Head>
                <title>project FBE - チュートリアル -</title>
                <meta
                    name="description"
                    content="Flowchart Build Executor はフローチャートを 作成 ・  実行する ためのWebツールです。ブラウザのみで動作し、アカウント登録の必要はありません。"
                />
            </Head>

            <BaseContent>
                <Section>
                    <h1>FBE チュートリアル</h1>
                    <p>
                        ここではFBEにを使いこなすためのチュートリアルを
                        紹介します。
                    </p>
                </Section>
                <Section>
                    <h2>目次</h2>
                    <ul>
                        {getstarts.map((getstart) => (
                            <li key={getstart.id}>
                                <Link href={`/getstart/${getstart.id}`}>
                                    {getstart.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Section>
            </BaseContent>
        </Base>
    );
};

export default GetStart;

// export const getServerSideProps: GetServerSideProps<GetStartProps> = async (
//     context
// ) => {
//     const getstarts = getGetstarts();
//     return {
//         props: {
//             getstarts,
//         },
//     };
// };

export const getStaticProps: GetStaticProps<GetStartProps> = async (
    context
) => {
    const getstarts = getGetstarts();
    return {
        props: {
            getstarts,
        },
    };
};


