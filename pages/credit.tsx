import Base from "components/layout/Base";
import BaseContent from "components/layout/BaseContent";
import Section from "components/Section";
import { images } from "image/index";
import Head from "next/head";
import Image from "next/image";
import React, { VFC } from "react";
import {
    AiFillGithub as GithubIcon, AiOutlineMail as MailIcon,
    AiOutlineTwitter as TwitterIcon
} from "react-icons/ai";
import {
    DiReact as ReactIcon
} from "react-icons/di";
import {
    SiMaterialui as MUIIcon,
    SiNextdotjs as NextIcon
} from "react-icons/si";
import styles from "./scss/credit.module.scss";



const Credit: VFC = () => {
    return (
        <Base>
            <Head>
                <title>project FBE - クレジット -</title>
                <meta
                    name="description"
                    content="Flowchart Build Executor はフローチャートを 作成 ・  実行する ためのWebツールです。ブラウザのみで動作し、アカウント登録の必要はありません。"
                />
            </Head>

            <BaseContent>
                <Section>
                    <h1>クレジット</h1>
                    <p>
                        青色のテキストはハイパーリンクになっているため、
                        クリック（タップ）することでページにジャンプすることができます。
                    </p>
                    <p>
                        お問い合わせはTBStenの
                        <a href="mailto://programmingcafeteria@gmail.com" rel="noreferrer" target="_blank" className={styles.link}>
                            メール
                        </a>
                        ,
                        <a href="https://twitter.com/o2MCNTc60FpTAW3" rel="noreferrer" target="_blank" className={styles.link}>
                            Twitter
                        </a>
                        まで！
                    </p>
                </Section>
                <Section>
                    <h2> FlowchartBuildExecutor </h2>
                    <dl className={styles.dl}>
                        <dt>Developer</dt>
                        <dd>
                            TBSten
                            <ul>
                                <li>
                                    <a href="mailto://programmingcafeteria@gmail.com">
                                        <MailIcon />
                                        メール
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/o2MCNTc60FpTAW3">
                                        <TwitterIcon />
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="https://tbsten.hatenablog.com/">
                                        はてなブログ
                                    </a>
                                </li>
                            </ul>
                        </dd>

                        <dt>Tech</dt>
                        <dd>
                            <a href="https://ja.reactjs.org/">
                                <ReactIcon />
                                React.js
                            </a>
                        </dd>
                        <dd>
                            <a href="https://mui.com/">
                                <MUIIcon />
                                Material UI
                            </a>
                        </dd>

                        <dt>Lisence</dt>
                        <dd className={styles.p}>
                            このライセンスに同意する場合のみFBEを利用してください。
                            FBEを使用した場合このライセンスに同意したものとみなします。
                            <ul>
                                <li>
                                    FlowchartBuildExecutor(以下FBE)の著作権はTBStenに帰属しますが、
                                    日本国の法律の範囲内かつ常識の範囲内であればいかなる利用も基本的には許容します。
                                </li>
                                <li>
                                    使用料など金銭を要求することもありません。
                                </li>
                                <li>
                                    FBEの使用にあたって著作者は一切の責任を負いません。
                                    自己責任でのご利用をお願いします。
                                </li>
                                <li>
                                    万が一上記の範囲外での使用をした場合は著作権者自身から利用の停止を求めることがあり、
                                    その場合は利用者は著作権者の指示に従うこととします。
                                </li>
                            </ul>
                            最低限の範囲のみ提示しましたが、FBEは以下のようなユースケースを
                            想定しています。ぜひご活用ください。もちろんこれ以外の利用も可能です。
                            <ul>
                                <li>
                                    教育機関などでのプログラミング及びアルゴリズムの学習
                                </li>
                                <li>各種SNSでのフローチャートの共有</li>
                            </ul>
                        </dd>

                        <dt>Source Code</dt>
                        <dd>
                            <a href="https://github.com/TBSten/FlowcharBuildExecutor-web">
                                <GithubIcon />
                                Github リポジトリ
                            </a>
                        </dd>
                    </dl>
                </Section>
                <Section>
                    <h2>
                        リリース
                    </h2>
                    <dl className={styles.dl}>
                        <dt>バージョン1</dt>
                        <ul>
                            <li>初リリース</li>
                        </ul>
                        <dt>バージョン2</dt>
                        <ul>
                            <li>UIを一新</li>
                            <li>プログラム変換機能を追加</li>
                        </ul>
                    </dl>
                </Section>
                <Section>
                    <h2> FlowchartBuildExecutor ホームページ </h2>
                    <dl className={styles.dl}>
                        <dt>Developer</dt>
                        <dd>TBSten</dd>

                        <dt>Tech</dt>
                        <dd>
                            <a href="https://nextjs.org/">
                                <NextIcon />
                                Next.js
                            </a>
                        </dd>

                        <dt>Images</dt>
                        <dd>
                            <a href="https://storyset.com/">
                                Storyset
                            </a>
                        </dd>

                        <dt>Deploy</dt>
                        <dd>
                            <div>
                                <a href="https://vercel.com?utm_source=tbsten&utm_campaign=oss.">
                                    Vercel
                                </a>
                            </div>
                            <div>
                            </div>
                        </dd>
                        <div className={styles["foot-icons"]}>
                            <a href="https://vercel.com?utm_source=tbsten&utm_campaign=oss.">
                                <Image src={images.vercel} alt="vercel" />
                            </a>
                        </div>
                    </dl>
                </Section>
            </BaseContent>
        </Base>
    );
};
export default Credit;





