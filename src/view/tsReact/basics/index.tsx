import React, { useRef } from 'react'
export default function Index() {
  return (
    <div>
      <div>
        <p>
          1、ts中的基本类型约束 具有: string number undefind boolean unknow any  object  数组  void never Symbol
        </p>
        <p>
          2、控制对象形状: 分为 <big><mark>type(类型别名)与interface(接口)</mark></big>
        </p>
        <p>
          3、联合类型：可以将变量类型控制在多个类型中，
          例如: <big><mark color='blue'> var val:string|number|boolean = 100</mark></big>
          或者 使用字面量与联合类型结合的方式 <big><mark>type moreType = string|number|boolean</mark></big>
        </p>
        <p>
          4、字面量类型：将一个具体值当做变量值与类型约束使用，例如: <big> <mark >var name:'钱宗泽'='钱宗泽'</mark></big>
        </p>
        <p>
          5、函数参数与返回值类型约束: <big><mark>function fun(name:string,age:number,sex?:string, ...rest:any):void { }</mark></big>
        </p>
        <p>
          6、箭头函数控制参数约束: <big><mark>const add: (x: number, y: number) =&gt; void = (x, y) =&gt; x + y</mark></big>
        </p>
        <p>
          7、<big><mark>非空断言 !. (将值排除null或者undefind) 确定赋值断言 let a!:number</mark></big>
        </p>
        <p>
          8、类型断言：as 操作符作用是明确通知Ts 确切类型  例如：<big><mark>let fix:number = arrNumber.find(item=&gt;item&gt;2) <u>as</u> number</mark></big>
        </p>
        <p>
          9、接口interface 例子：<big><mark>interface IProps {'\u007b'}name:string,age?:number,readonly lover:string[],[propName:string]:any{'\u007d'}</mark></big>
        </p>
        <p>
          10、类型别名type 例子：<big><mark>type TForm={'\u007b'}name:string,age:number{'\u007d'}</mark></big> (内容写法与接口大致相同，不同之处是接口不可作用于基本数据类型上)
        </p>
        <p>
        </p>
      </div>
    </div>
  )
}
