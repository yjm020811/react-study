import React, { useEffect, useState } from "react";


export const Count: React.FC = () => {
    // 定义状态 count，其初始值为 0
    // 如果要修改 count 的值，需要调用 setCount(新值) 函数 
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
    }
    // 当 count 发生变化时，会触发组件重新渲染
    console.log("触发了count组件渲染");
    return (
        <div>
            <strong>useState：</strong>
            <div>Count的值：{count}</div>
            <button onClick={add}>+1</button>
        </div>
    )
}


export const DateCom: React.FC = () => {
    // 通过函数给useState传入一个函数，该函数返回一个初始值
    const [date] = useState(new Date());
    return (
        <div>
            <div>当前的年月日信息</div>
            <p>年份：{date.getFullYear()}</p>
            <p>月份：{date.getMonth() + 1}</p>
            <p>天：{date.getDate()}</p>
        </div>
    )
}

// p5：解决值更新异步的问题
export const Count2: React.FC = () => {
    const [count, setCount] = useState(0);
    const add = () => {
        // 强调：setCount 函数的调用是异步的
        setCount(count + 1);
        // 希望打印最新的count的值，但是打印的是旧的count的值，所以使用useEffect
        console.log("useState中的count值：", count);
    }
    // useEffect 会在组件首次渲染完成后会执行一次
    useEffect(() => {
        console.log("useEffect中的count值：", count);
    }, [count])
    return (
        <div>
            <div>Count的值：{count}</div>
            <button onClick={add}>+1</button>
        </div>
    )
}

//p6: 解决值更新不及时的Bug
export const Count3: React.FC = () => {
    const [count, setCount] = useState(0);
    const add = () => {
        // // 1.希望让count从0自增到1
        // setCount(count + 1);
        // // 2.希望让count从1自增到2
        // setCount(count + 1);
        // 解决：当我们修改state状态的时候，如果发现新值依赖于旧值，此时不要直接计算新值，而是通过函数形参传递计算出新值
        setCount((count) => count + 1);
        setCount((count) => count + 1);
    }
    // useEffect 会在组件首次渲染完成后会执行一次
    useEffect(() => {
        console.log("useEffect中的count值：", count);
    }, [count])
    return (
        <div>
            <div>Count的值：{count}</div>
            <button onClick={add}>+1</button>
        </div>
    )
}

// p7：更新对象类型的值
export const UserInfo: React.FC = () => {
    const [user, setUser] = useState({ name: "张三", age: 18 });

    const update = () => {
        // 1.直接修改user的值，不会触发组件重新渲染
        // user.name = "李四";
        // 2.通过setUser函数修改user的值，会触发组件重新渲染
        setUser({ ...user, name: "李四" });
    }
    return (
        <div>
            <div>姓名：{user.name}</div>
            <div>年龄：{user.age}</div>
            <button onClick={update}>修改姓名</button>
        </div>
    )
}

// p8.模拟forceUpdate实现组件强制刷新
export const FUpdate: React.FC = () => {
    const [, forceUpdate] = useState({});

    // 强制刷新组件，给useState传入一个空对象，每次传入的对象和上一次地址不一样，所以会触发组件重新渲染
    const onRefresh = () => forceUpdate({});

    return (
        <div>
            <button onClick={onRefresh}>点击强制刷新--{Date.now()}</button>
        </div>
    )
}