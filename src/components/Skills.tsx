import React from "react";
import Title from "antd/es/typography/Title";
import {Divider} from "antd";
import Paragraph from "antd/es/typography/Paragraph";

const Skills: () => JSX.Element = () => {
    return (<section id="skills">
        <Title level={2}>Skills</Title>
        <Divider />
        <Title level={3}>Tech stack</Title>
        <Paragraph>PHP 7-8, Yii2, Javascript, React hooks, Svelte, Docker</Paragraph>
        <Title level={3}>Databases</Title>
        <Paragraph>Postgresql, Mysql, Redis</Paragraph>
        <Title level={3}>Environment & Tools</Title>
        <Paragraph>Windows, Centos, Debian, IntelliJ IDEA, Ant, Git</Paragraph>
        <Divider />
    </section>)
}

export default Skills