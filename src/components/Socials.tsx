import React from "react";
import Link from "antd/es/typography/Link";
import {TwitterOutlined, LinkedinOutlined, FacebookOutlined, SendOutlined, GithubOutlined} from "@ant-design/icons";

const Round = (child: JSX.Element):JSX.Element => {
    return (<div className="flex-social">{child}</div>
    )
}
const Socials: () => JSX.Element = () => {
    return (<div className="socials">
        <Link href="https://twitter.com/GlorySatan+" target='_blank'>{Round(<TwitterOutlined />)}</Link>
        <Link href="https://www.linkedin.com/in/%D0%B8%D0%B2%D0%B0%D0%BD-%D1%82%D0%B0%D1%82%D0%B0%D1%80%D0%B8%D0%BD%D0%BE%D0%B2-07615b239/"
              target='_blank'>
            {Round(<LinkedinOutlined />)}
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=100045107402933"
              target='_blank'>
            {Round(<FacebookOutlined />)}
        </Link>
        <Link href="https://t.me/yarcrazy" target='_blank'>{Round(<SendOutlined rotate={320}/>)}</Link>
        <Link href="https://github.com/Yarcrazy" target='_blank'>{Round(<GithubOutlined />)}</Link>
    </div>)
}

export default Socials