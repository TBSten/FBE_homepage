import React from "react";
import Image from "next/image" ;
import Base from "components/layout.tsx/Base";
import Section from "components/Section";
import LinkButton from "components/LinkButton";
import conf from "lib/conf" ;
import Card from "components/Card";
import ContentSection from "components/ContentSection";

import img_kc from "image/Knowledge-cuate.png" ;
import img_wd from "image/Website designer-bro.png" ;
import img_bg_top from "image/bg-top.svg" ;
import img_ss_02 from "image/ss_02.png" ;
import img_ss_03 from "image/ss_03.png" ;

import styles from "./scss/index.module.scss";
import ImageSection from "components/ImageSection";
import B from "components/B";
import Head from "next/head";
import LinedLink from "components/LinedLink";

function ImageLine({children}){
    return (
        <div className={styles.imgLine}>
            <div className={styles.imgContent}>
                {children}
            </div>
        </div>
    ) ;
}

export default function Home() {
    return (
        <Base className={styles.container} footer={false} >
            <Head>
                <title>project FBE - フローチャートを より身近に -</title>
                <meta name="description" content="Flowchart Build Executor はフローチャートを 作成 ・  実行する ためのWebツールです。ブラウザのみで動作し、アカウント登録の必要はありません。" />
            </Head>
            
            <Section className={styles.section} style={{backgroundImage:`url(${img_bg_top.src})`}}>
                <div className={styles.detail}>
                    <h1>アルゴリズム初学者のためのフローチャートビルドツール</h1>
                    <p>
                        FBEを使ってあなたのアルゴリズムを
                        実行しましょう！
                    </p>
                    <div className={styles.btngroup}>
                        <LinkButton href={conf.FBE_URL} >
                            {" >> "}今すぐ使ってみる{" >> "}
                        </LinkButton>
                    </div>
                </div>
                <div className={styles.img}>
                    <Image src={img_kc} alt="fbe image"/>
                </div>
            </Section>
            <ImageSection src={img_ss_02}>
                <h2>
                    <B>フローチャート</B>でアルゴリズムを
                </h2>
                <p>
                    FlowchartBuildExecutor(FBE)を使うことで、
                    フローチャートを使って
                    プログラムを書くことが出来ます。
                </p>
                <p>
                    FBEはアルゴリズムの構築に集中できるように<B>シンプルで、分かりやすいUI</B>で
                    作成ができるように設計されています。
                    そのため、今すぐ始めても<B>難しい操作なしにフローチャートを作成</B>できます。
                </p>
            </ImageSection>
            <ContentSection>
                <h2> 必要なのはブラウザだけ </h2>
                <h2> ログインもいらない </h2>
                <p>
                    FBEを使用するためにあなたが準備すべきものは
                    <B>パソコン・スマホのブラウザだけ</B>です。
                    面倒な会員登録なしですぐにFBEを開始できます！
                </p>
                <ImageLine>
                    <Image src={img_wd} alt="fbe image"/>
                </ImageLine>
            </ContentSection>
            <ImageSection src={img_ss_03} reverse>
                <h2> フローチャートを<B>実行</B> </h2>
                <p>
                    FBEで作成したフローチャートは<B>実行すること</B>が出来ます。
                </p>
                <p>
                    ボタンをいくつかポチポチしていくだけで
                    あなたが作ったフローチャートが動き出します！
                </p>
                <p>
                    また、<B>実行中の変数の一覧も表示する</B>ことが出来るため、
                    ちょっとしたトレースにも役立ちます。
                </p>
            </ImageSection>
            <ContentSection>
                <h2> さぁ、FBEを始めましょう！ </h2>
                <div className={styles.cards}>
                    <Card>
                        <h2>使ってみる</h2>
                        <p>
                            とりあえずFBEを使ってみたい方はこちら
                        </p>
                        <LinkButton href={conf.FBE_URL} >
                            使ってみる
                        </LinkButton>
                    </Card>
                    <Card>
                        <h2>チュートリアル</h2>
                        <p>
                            私たちが用意している
                            チュートリアルで
                            FBEの基礎を学びたい方はこちら
                        </p>
                        <LinkButton href="/getstart" >
                            チュートリアル
                        </LinkButton>
                    </Card>
                    <Card>
                        <h2> ドキュメント </h2>
                        <p>
                            FBEの詳細を確認したい方はこちら
                        </p>
                        <LinkButton href="/docs" >
                            FBE Docs へ
                        </LinkButton>
                    </Card>
                </div>
            </ContentSection>
        </Base>
    );
}

