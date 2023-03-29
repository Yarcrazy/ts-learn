import React, { useState } from 'react';
import { StepForwardOutlined, CheckSquareOutlined, ProfileOutlined, MehOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

const items: MenuProps['items'] = [
    {
        label: (
            <a href="/#main" rel="noopener noreferrer">
                Main
            </a>
        ),
        key: 'main',
        icon: <StepForwardOutlined />,
    },
    {
        label: (
            <a href="/#skills" rel="noopener noreferrer">
                Skills
            </a>
        ),
        key: 'skills',
        icon: <ProfileOutlined />,
    },
    {
        label: (
            <a href="/#experience" rel="noopener noreferrer">
                Experience
            </a>
        ),
        key: 'experience',
        icon: <CheckSquareOutlined />,
    },
    {
        label: (
            <a href="/#languages" rel="noopener noreferrer">
                Languages
            </a>
        ),
        key: 'languages',
        icon: <MehOutlined />,
    },
];

const Header: React.FC = () => {
    const [current, setCurrent] = useState('main');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default Header;