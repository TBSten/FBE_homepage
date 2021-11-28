import React from "react";
import Base from "components/layout.tsx/Base";
import Section from "components/Section";
import TopSection from "components/TopSection";
import ContentSection from "components/ContentSection";

export default function Test() {
    return (
        <Base>
            <TopSection>
                <h1>test page</h1>
                <h2> welcome to our home page.</h2>
                <p>this page is top page !</p>
            </TopSection>

            {[1,2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <ContentSection>
                    test {num}
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                    <p>aaaaaaaaaa</p>
                </ContentSection>
            ))}
        </Base>
    );
}
