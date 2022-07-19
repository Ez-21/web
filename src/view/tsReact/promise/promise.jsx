import React from 'react'
// 定义状态
var state = 'Pending'
var Resvalue = undefined
var Rejvalue = undefined

// 手写Promise
function promise(callback) {
    // 定义成功回调
    const res = (res) => {
        if (state == 'Pending') {
            state = 'reslove'
            Resvalue = res
        }
    }
    const rej = (err) => {
        if (state == 'Pending') {
            state = 'reject'
            Rejvalue = err
        }
    }
    callback(res, rej)
}

// 定义then 链式方法
promise.prototype.then = (success, loser) => {
    if (state == 'reslove' && typeof success == 'function') {
        success(Resvalue)
    }
    if (state == 'reject' && typeof loser == 'function') {
        loser(Rejvalue)
    }
}
new promise((res, rej) => {
    console.log('手写promise')
    rej(-100)
}).then((res) => {
    console.log(res)
}, (rej) => {
    console.log(rej);
})
export default function Index() {
    return (
        <div>index</div>
    )
}
