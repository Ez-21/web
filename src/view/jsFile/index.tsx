import React, {useCallback, useState} from 'react'

var obj = {
    name: '钱宗泽',
    age: 23,
    color: ['black']
}
type inte = {
    name: '中国',
    age?: number,
    readonly lover: [any]
}
let obf = {}
let obs = {}
console.log(obs.toString() == obf.toString())
export default function Index() {
    return (
        <div id='box'>
            <div>
                <div>
                    <p>测试</p>
                </div>
            </div>
        </div>
    );
};
