import React from "react";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import {Divider} from "antd";

const Experience: () => JSX.Element = () => {
    return (<section id="experience">
        <Title level={2}>Experience</Title>
        <Divider />
        <Title level={3}>Business promotion LLC</Title>
        <Title level={4}>Fullstack PHP engineer Apr 2020 - Present</Title>
        <ul>
            <li><Text>Developed and implemented modern svelte and react components projects such as zengram.ru, zenlink.ru, spamguardapp.com</Text></li>
            <li><Text>Configured and launching paralleling calculating process projects such as avodata.pro</Text></li>
            <li><Text>Improved and effectively enhanced hard skills</Text></li>
        </ul>
        <Title level={3}>Deltaplan ad agency</Title>
        <Title level={4}>Frontend engineer Nov 2019 - Apr 2020</Title>
        <ul>
            <li><Text>Configured and optimized dashboard for business partners</Text></li>
            <li><Text>Acquired knowledge React JS library</Text></li>
        </ul>
        <Divider />
    </section>)
}

export default Experience