import ReactDOMServer from "react-dom/server" ;
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

export const MyMarkdownComponents = {
    Section: {
        component: Section,
    },
    Round: {
        component: (props)=><div className={styles.round}>{props.children}</div>
    },
    Alert: {
        component:(props)=><div className={styles.alert}>{props.children}</div>
    },
    Success: {
        component:(props)=><div className={styles.success}>{props.children}</div>
    },
    HowTo:{
        component:(props)=><div className={styles.howto}>{props.children}</div>
    },
    Red:{
        component:(props)=><div className={styles.red}>{props.children}</div>
    },
    Blue:{
        component:(props)=><div className={styles.blue}>{props.children}</div>
    },
    Green:{
        component:(props)=><div className={styles.green}>{props.children}</div>
    },
    // add components
} ;
export const MyMarkdownCustoms = {
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
        component: (props)=>{
            return <div className={styles.p}> {props.children} </div> ;
        },
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
    strong:{
        component: B,
    },
    table:{
        component: (props)=>(
            <div className={styles.tableCon}>
                <table className={styles.table}>{props.children}</table>
            </div>
        ),
    },
    h1:{
        component: (props)=>{
            return <h1 id={props.children}>{props.children}</h1>
        }
    },
    h2:{
        component: (props)=>{
            return <h2 id={props.children}>{props.children}</h2>
        }
    },
    h3:{
        component: (props)=>{
            return <h3 id={props.children}>{props.children}</h3>
        }
    },
    h4:{
        component: (props)=>{
            return <h4 id={props.children}>{props.children}</h4>
        }
    },
    h5:{
        component: (props)=>{
            return <h5 id={props.children}>{props.children}</h5>
        }
    },
    h6:{
        component: (props)=>{
            return <h6 id={props.children}>{props.children}</h6>
        }
    },
} ;


export interface MyMarkdownProps {
    children:string;
} ;
export const MyMarkdown: FC<MyMarkdownProps> = ({children}) => {
    return (
        <Markdown
            options={{
                overrides: {
                    ...MyMarkdownCustoms,
                    ...MyMarkdownComponents,
                },
            }}
        >
            {children}
        </Markdown>
    );
};


