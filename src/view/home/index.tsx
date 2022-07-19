import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import Aud from '../../components/Audio/audio'
import {Carousel} from 'antd';
import style from './index.module.scss'
import Videos from '../../video/vide'

export default function Index() {
    const go = useNavigate();
    const item = ['Js', 'GitHub', 'Note']
    const goCk = (key: number): void => {
        switch (key) {
            case 0:
                go('/JsFile');
                break;
            case 1:
                location.href = 'https://github.com/Ez-21';
                break
            case 2:
                go('/TsReact');
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <div className={style.box}>
                <div>
                    <nav>
                        {
                            item.map((val, index) => (
                                <div key={val} onClick={() => goCk(index)}>{val}</div>
                            ))
                        }
                    </nav>
                    <Carousel dotPosition='bottom' autoplay>
                        {
                            Videos.map(item => (
                                <div className={style.carousel} key={item}>
                                    <video preload='auto' className={style.videos} src={item} controls></video>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
                <div className={style.header}>
                </div>
                <div className={style.body}></div>
                <Aud></Aud>
            </div>
        </div>
    )
}
