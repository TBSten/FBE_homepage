import B from "components/B";
import Section from "components/Section";
import React, { FC } from "react";
import Markdown from "markdown-to-jsx" ;
import LinkButton from "components/LinkButton";
import Image from "next/image" ;

import styles from "./index.module.scss" ;

import {images} from "image" ;

function ImageLine({src}:{src:StaticImageData|string}){
    return (
        <div className={styles.imgLine}>
            <div className={styles.imgCon}>
                <Image src={src} alt="fbe image"/>
            </div>
        </div>
    ) ;
}

export interface MyMarkdownProps {
    children:string;
} ;
export const MyMarkdown: FC<MyMarkdownProps> = ({children}) => {
    return (
        <Markdown
            options={{
                overrides: {
                    a: {
                        component: (props) => {
                            return (
                                <>
                                    <LinkButton
                                        href={props.href}
                                        className={styles.space}
                                    >
                                        {props.children}
                                    </LinkButton>
                                </>
                            );
                        },
                    },
                    p: {
                        component: "div",
                    },
                    Section: {
                        component: Section,
                    },
                    img: {
                        component: (props) => (
                            <ImageLine
                                src={
                                    images[props.src]
                                        ? images[props.src]
                                        : props.src
                                }
                            />
                        ),
                    },
                    em: {
                        component: B,
                    },
                },
            }}
        >
            {children}
        </Markdown>
    );
};


