import React from "react";
import {Image, Typography} from "antd";

const { Title, Link, Text } = Typography
const MainHead: () => JSX.Element = () => {
    return (<div className="main-head">
        <Image src='/face.jpg' alt='face' height={100} width={100} style={{borderRadius: 100}} />
        <Title>Ivan Tatarinov</Title>
        <div className="flex-links">
            <Link href='mailto:yarcrazy2323@gmail.com' target='_blank'>yarcrazy2323@gmail.com</Link>
            <Link href='https://join.skype.com/invite/m3dtIcuNq2pU' target='_blank'>Skype</Link>
            <Text>Bali, Ubud</Text>
        </div>
    </div>)
}

export default MainHead