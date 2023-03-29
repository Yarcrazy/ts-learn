import React from "react";
import Title from "antd/es/typography/Title";
import {Divider} from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const Languages: () => JSX.Element = () => {
    return (
        <section id="languages">
            <Title level={2}>Languages</Title>
            <Divider />
            <Paragraph><strong>English</strong> - intermediate (B1)</Paragraph>
            <Paragraph><strong>Russian</strong> - native</Paragraph>
        </section>
    )
}

export default Languages