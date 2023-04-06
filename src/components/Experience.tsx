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
            <li><Text>Configured and launching paralleling calculating process projects such as datajam.pro and avodata.pro</Text></li>
            <li><Text>Improved and effectively enhanced hard skills</Text></li>
        </ul>
        <Title level={3}>Deltaplan ad agency</Title>
        <Title level={4}>Frontend engineer Nov 2019 - Apr 2020</Title>
        <ul>
            <li><Text>Configured and optimized dashboard for business partners</Text></li>
            <li><Text>Acquired knowledge React JS library</Text></li>
        </ul>
        <Title level={3}>Freelance</Title>
        <Title level={4}>PHP developer Feb 2019 - Nov 2019</Title>
        <ul>
            <li><Text>Developed some projects such as https://github.com/ilocalcoo/iLocal</Text></li>
            <li><Text>Acquired knowledge PHP 7 and Yii2 framework</Text></li>
        </ul>
        <Divider />
    </section>)
}

export default Experience