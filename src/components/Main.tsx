import React from "react";
import MainHead from "./MainHead";
import Title from "antd/es/typography/Title";
import Socials from "./Socials";
import {Divider} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const Main: () => JSX.Element = () => {
    return (<section id='main'>
        <MainHead />
        <Divider />
        <div className="flex-desc">
            <Title level={3}>Fullstack engineer 4+ years experience</Title>
            <Socials />
        </div>
        <Divider />
        <Paragraph>
            <Text><strong>Skilled PHP Developer</strong> with proven expertise in delivering large-scale software
                products. An impeccable knowledge and skills of creating distributed, robust and scalable server-side
                applications. Always focused on goals and delivering success to rapidly evolving and dynamic
                environments.</Text>
        </Paragraph>
        <Divider />
    </section>)
}

export default Main