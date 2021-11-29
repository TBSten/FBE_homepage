import Base from "components/layout.tsx/Base";
import BaseContent from "components/layout.tsx/BaseContent";
import Section from "components/Section";
import React, { FC } from "react";

import styles from "./scss/credit.module.scss";

const Credit: FC<{}> = ({}) => {
    return (
        <Base>
            <BaseContent>
                <Section>
                    <h1>クレジット</h1>
                    <p>
                        青色のテキストはハイパーリンクになっているため、
                        クリック（タップ）することでページにジャンプすることができます。
                    </p>
                </Section>
                <Section>
                    <h2> FlowchartBuildExecutor </h2>
                    <dl className={styles.dl}>
                        <dt>Developer</dt>
                        <dd>
                            TBSten
                            <ul>
                                <li><a href="mailto://programmingcafeteria@gmail.com">メール</a></li>
                                <li><a href="https://twitter.com/o2MCNTc60FpTAW3">Twitter</a></li>
                                <li><a href="https://tbsten.hatenablog.com/">はてなブログ</a></li>
                            </ul>
                            

                        </dd>

                        <dt>Tech</dt>
                        <dd>
                            <a href="https://ja.reactjs.org/">React.js</a>
                        </dd>
                        <dd>
                            <a href="https://mui.com/">Material UI</a>
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
                                    使用料などを要求することもありません。
                                </li>
                                <li>
                                    万が一上記の範囲外での使用をした場合は著作権者自身から利用の停止を求めることがあり、
                                    その場合は利用者は著作権者の指示に従うこととします。
                                </li>
                            </ul>
                            最低限の範囲のみ提示しましたが、FBEは以下のようなユースケースを
                            想定しています。ぜひご活用ください。もちろんこれ以外の利用も可能です。
                            <ul>
                                <li>教育機関などでのプログラミング及びアルゴリズムの学習</li>
                                <li>各種SNSでのフローチャートの共有</li>
                            </ul>
                        </dd>

                        <dt>Source Code</dt>
                        <dd>
                            <a href="https://github.com/TBSten/FlowcharBuildExecutor-web">
                                Github リポジトリ
                            </a>
                        </dd>
                    </dl>
                </Section>
                <Section>
                    <h2> FlowchartBuildExecutor ホームページ </h2>
                    <dl className={styles.dl}>
                        <dt>Developer</dt>
                        <dd>TBSten</dd>

                        <dt>Tech</dt>
                        <dd>
                            <a href="https://nextjs.org/">Next.js</a>
                        </dd>

                        <dt>Images</dt>
                        <dd>
                            <a href="https://storyset.com/">Storyset</a>
                        </dd>
                    </dl>
                </Section>
            </BaseContent>
        </Base>
    );
};
export default Credit;
