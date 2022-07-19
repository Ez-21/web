import React, { useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import play from './img/bofang.png'
import pause from './img/zanting.png'
import ago from './img/shangyiqu.png'
import future from './img/xiayiqu.png'
import soundSrc from './src.js'
export default function () {
    const audio :React.RefObject<any> = useRef(false)
    const [dim,setDim] = useState(false)
    const [index,setIndex] = useState(0)
    const [playing, setPlaying] = useState(false)
    // 状态播放
    // document.addEventListener('visibilitychange', (e) => {
    //     if (document.visibilityState == 'hidden') {
    //         autPause()
    //     } else {
    //         autPlay()
    //     }
    // })
    // 滚动播放
    // document.addEventListener('scroll',()=>{
    //     if(document.documentElement.scrollTop>490){
    //         autPause()
    //     }else{
    //         autPlay()
    //     }
    // })
    const autPlay = () => {
        setPlaying(true)
        audio.current.play()
    }
    const autPause = () => {
        setPlaying(false)
        audio.current.pause()
    }
    const formerly = ()=>{
        console.log(index)
        setIndex(index=>{
            index = index-1
            if(index<=0){
                return soundSrc.length-1
            }
            return index
        })
        setPlaying(true)
        audio.current.play()
    }
    const next = ()=>{
        setIndex(index=>{
            index = index+1
            if(index>soundSrc.length-1){
                return index=0
            }
            console.log(soundSrc[index])
            return index
        })
        setPlaying(true)
        audio.current.play()
    }
    return (
        <div>
            <div>
                <audio ref={audio} hidden  src={soundSrc[index].src}   onCanPlay={autPlay} onEnded={next}></audio>
            </div>
            <div className={style.box}>
            <div className={style.before}  style={{'background':`url(${soundSrc[index].img})round `,'filter':dim?"blur(2px)":''}} ></div>
                <div className={style.circle}>
                    <div className={style.center} onMouseLeave={()=>setDim(false)} onMouseOver={()=>setDim(true)}>
                        <div>
                            <img src={ago} alt=""  onClick={formerly}/>
                        </div>
                        <div>
                            <img src={play} alt="" onClick={autPlay} hidden={playing ? true : false} />
                            <img src={pause} alt="" onClick={autPause} hidden={playing ? false : true} />
                        </div>
                        <div><img src={future} alt=""  onClick={next}/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
