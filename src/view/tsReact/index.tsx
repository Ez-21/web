import { UnorderedListOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu, PageHeader } from 'antd';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import style from './index.module.scss'
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem('TypeScript', 'sub1', <UnorderedListOutlined />, [
        getItem('基础是进阶的前提', 'g1', null, [getItem('基础', 1)], 'group'),
        getItem('进阶是成功的必需', 'g2', null, [getItem('进阶', 2)], 'group'),
        getItem('练习是知识的巩固', 'g3', null, [getItem('练习', 3)], 'group'),
    ]),
];

const App: React.FC = () => {
    const goPage = useNavigate()
    const onClick: MenuProps['onClick'] = ({ key }) => {
        switch (key) {
            case '1': { goPage('/TsReact/basics') }; break
            case '2': { goPage('/TsReact/advanced') }; break
            case '3': { goPage('/TsReact/test') }; break
            default:
                break;
        }
    };

    return (
        <div className={style.box}>
            <PageHeader
                className="site-page-header"
                onBack={() => location.replace('/Home')}
                title="StudyNote🥇"
            />
            <div className={style.contentBox}>
                <Menu
                    onClick={onClick}
                    style={{ width: 256 }}
                    mode="inline"
                    items={items}
                />
                <div className={style.right}>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default App;