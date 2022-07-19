import React, { useState, useRef, useLayoutEffect, useEffect } from 'react'
import ReactDOM from 'react-dom'
import image from '../img/eve.jpg'
import { useNavigate } from 'react-router-dom';
import style from './App.module.scss'
function App() {
  const goPage = useNavigate()
  var [bgImg, setBgImg] = useState({ img: undefined })
  var [num, setNum] = useState(5)
  useLayoutEffect(() => {
    const mouth = new Date().getMonth() + 1
    switch (mouth) {
      case 1: setBgImg({ img: require('../img/mouth/one.jpg') }); break;
      case 2: setBgImg({ img: require('../img/mouth/two.jpg') }); break;
      case 3: setBgImg({ img: require('../img/mouth/three.jpg') }); break;
      case 4: setBgImg({ img: require('../img/mouth/four.jpg') }); break;
      case 5: setBgImg({ img: require('../img/mouth/five.jpg') }); break;
      case 6: setBgImg({ img: require('../img/mouth/six.jpg') }); break;
      default: setBgImg({ img: require('../img/mouth/six.jpg') }); break;
    }
  }, [])
  useEffect(() => {
    console.log(location,'文档地址')
    if(location.pathname=='/'){
      Notification.requestPermission()
      .then((res) => {
          console.log(456)
          if (res == 'granted') {
              const notFiction = new Notification('目标是找到一个不吃香菜的世界🎈', {
                  image: image,
                  body: 'happy',
              })
          }
      });
    }
}, [])
  const countDown = setInterval(() => {
    setNum(num => {
      if (num != 1) {
        return num = num - 1
      } else {
        clearInterval(countDown)
        return num = 1
      }
    })
  }, 1000)
  setTimeout(() => {
    goPage('/Home')
    // countDown()
  }, 6000);
  return (
    <div className="App">
      <div className={style.bgBox} style={{ 'background': `url(${bgImg.img})center center`, }}>
        <p className={`${style.line} ${style.animation}`} >
          Hi！ 欢迎来到我的网站❤！<span>{num}</span>
        </p>
      </div>
    </div>
  );
}

export default App;
