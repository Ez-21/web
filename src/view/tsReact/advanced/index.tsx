import React from 'react'
export default function index() {
  return (
    <div>
        <div>
          <p>
            1、泛型：泛型是类型形参 调用时传入具体数据类型,可以在书写时使用<big><mark>泛型默认值</mark></big>和使用<big><mark>extends</mark> </big> 扩展类型别名或接口,进行扩充其他属性
          </p>
          <p>
            2、交叉类型：将多个类型合并为一个类型 语法为<big><mark>类型1&类型2</mark> 如果多种类型内部存在同属性数据类型冲突 则该属性不可赋值！！</big>
          </p>
          <p>
            3、联合类型：使用<big><mark>|</mark></big>管道符分隔数据类型,表示变量类型可能是多种类型中的一个,联合类型与交叉类型的不同之处在于：联合类型是多个可选类型中的的一种类型,交叉类型是多个类型的合并类型,<br />
            <span>如果一个<b>值</b>是联合类型(<b>不是type类型别名！！</b>) 那么只能访问联合类型的共有属性或方法</span>
          </p>
          <p>
            4、类型别名：使用<big><mark>type</mark></big>关键字给类型起一个别名,可用于交叉类型 接口 联合类型 或基本类型 例：type useEd = true|false,
            <span>(如果类型约束对象属性具有属性值 则声明的变量的属性值必须等同该类型约束的属性值《自己理解》)</span>
          </p>
          <p>
            5、接口：使用<big><mark>interface</mark></big>关键字声明对象形状【只能是对象类型】的类型约束,内部参数约束 <big><mark>readonly ?  [propName:string]:any </mark></big> 与类型别名相同
          </p>
          <p>
            6、<b>类型别名与接口不同之处：</b>1：接口可以使用<b>extends</b>与class中的<b>implements</b>关键字进行接口类型约束扩充,类型别名不行；2：类型别名可用作原始类型、交叉类型、联合类型、对象，<b>接口只用于对象</b>
          </p>
          <p>
            7、
          </p>
        </div>
    </div>
  )
}
