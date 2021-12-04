import B from "components/B";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { FC, } from "react";
import Image from "next/image";

import Markdown from "markdown-to-jsx";

import styles from "./scss/[title].module.scss";
import LinkButton from "components/LinkButton";
import Section from "components/Section";
import Base from "components/layout.tsx/Base";
import BaseContent from "components/layout.tsx/BaseContent";

import img_ss_01 from "image/ss_01.png";
import img_ss_02 from "image/ss_02.png";
import img_ss_03 from "image/ss_03.png";
import img_ss_04 from "image/ss_04.png";
import img_ss_05 from "image/ss_05.png";
import {
    getGetstarts,
    getContent,
    GetstartData,
    getNext,
    getPrev,
    getGetstart,
} from "lib/getstart";
import { SideBarItem } from "components/SideBar";
import Link from "components/Link";
import Head from "next/head";
import { MyMarkdown } from "lib/mymarkdown";

const images: { [key: string]: StaticImageData } = {
    img_ss_01,
    img_ss_02,
    img_ss_03,
    img_ss_04,
    img_ss_05,
};

function ImageLine({ src }: { src: StaticImageData | string }) {
    return (
        <div className={styles.imgLine}>
            <div className={styles.imgCon}>
                <Image src={src} alt="fbe image" />
            </div>
        </div>
    );
}

const Body: FC<{ children: string }> = ({ children }) => {
    // return (
    //     <Markdown
    //         options={{
    //             overrides: {
    //                 a: {
    //                     component: (props) => {
    //                         return (
    //                             <>
    //                                 <LinkButton
    //                                     href={props.href}
    //                                     className={styles.space}
    //                                 >
    //                                     {props.children}
    //                                 </LinkButton>
    //                             </>
    //                         );
    //                     },
    //                 },
    //                 p: {
    //                     component: "div",
    //                 },
    //                 Section: {
    //                     component: Section,
    //                 },
    //                 img: {
    //                     component: (props) => (
    //                         <ImageLine
    //                             src={
    //                                 images[props.src]
    //                                     ? images[props.src]
    //                                     : props.src
    //                             }
    //                         />
    //                     ),
    //                 },
    //                 em: {
    //                     component: B,
    //                 },
    //             },
    //         }}
    //     >
    //         {children}
    //     </Markdown>
    // );
    return (
        <MyMarkdown>
            {children}
        </MyMarkdown>
    ) ;
};

const GetStartSide: FC<{ getstarts: GetstartData[] }> = ({ getstarts }) => {
    return (
        <SideBarItem>
            <h3>チュートリアル</h3>
            <ul>
                {getstarts.map((getstart) => (
                    <li key={getstart.title}>
                        <Link href={`/getstart/${getstart.id}`}>
                            {getstart.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </SideBarItem>
    );
};

const Nav: FC<{ prev: GetstartData; next: GetstartData }> = ({
    prev,
    next,
}) => {
    const prevLink = prev ? "/getstart/" + prev.id : "";
    const nextLink = next ? "/getstart/" + next.id : "";
    return (
        <div className={styles.center}>
            <LinkButton href={prevLink} disable={!prev ? true : false}>
                前
            </LinkButton>
            |
            <LinkButton href={nextLink} disable={!next ? true : false}>
                次
            </LinkButton>
        </div>
    );
};
interface getStartServerSideProps {
    title: string;
    content: string;
    getstarts: GetstartData[];
    prev: GetstartData;
    next: GetstartData;
}
const GetStart: FC<getStartServerSideProps> = ({
    prev,
    next,
    content,
    getstarts,
}) => {
    return (
        <Base>
            <Head>
                <title>project FBE - チュートリアル -</title>
                <meta
                    name="description"
                    content="Flowchart Build Executor はフローチャートを 作成 ・  実行する ためのWebツールです。ブラウザのみで動作し、アカウント登録の必要はありません。"
                />
            </Head>

            <BaseContent side={<GetStartSide getstarts={getstarts} />}>
                <Nav prev={prev} next={next} />
                <div className={styles.getstart}>
                    <Body>{content}</Body>
                </div>
                <Nav prev={prev} next={next} />
            </BaseContent>
        </Base>
    );
};
export default GetStart;

export const getStaticProps: GetStaticProps<getStartServerSideProps> = async (context) => {
    try {
        const id = context.params.id as string;
        const { title } = getGetstart(id);
        const content = getContent(id);
        const prev = getPrev(id);
        const next = getNext(id);
        const getstarts = getGetstarts();
        const ansProps = {
            title,
            content,
            prev,
            next,
            getstarts,
        };
        return {
            props: ansProps,
        };
    } catch (e) {
        console.error(e);
    }
    return {
        notFound: true,
    };
};

export const getStaticPaths: GetStaticPaths = async(ctx)=>{
    const paths = getGetstarts().map(getstart=>`/getstart/${getstart.id}`);
    return {
        paths,
        fallback:false,
    } ;
};



