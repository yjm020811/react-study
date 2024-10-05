import React, { useEffect, useState } from "react";

export const CountEffect1: React.FC = () => {
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState('你好');

    // 1.如果省略了第二个参数，那么useEffect会在每次渲染后执行
    // 2.如果有依赖项，那么useEffect会在该依赖项发生变化后执行
    // 3.如果依赖项是空数组，那么useEffect只会在第一次渲染后执行
    useEffect(() => {
        console.log('count发生了变化', count);
    }, [count]);

    const changeFlag = () => {
        setFlag(flag === '你好' ? '世界' : '你好');
    }

    return <>
        <h3>count的值：{count}</h3>
        <h3>flag的值：{flag}</h3>
        <button onClick={() => setCount(count + 1)} >+1</button>
        <button onClick={changeFlag} >切换</button>
    </>
}

export const ColorChildCom: React.FC = () => {
    const [color, setColor] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        fetch("https://api.liulongbin.top/v1/color", {
            signal: controller.signal
        })
            .then(res => res.json())
            .then(res => setColor(res.data.color))
            .catch(err => console.log(err))
        // return清理函数触发的时机：
        // 1.组件卸载时
        // 2.当effect副作用的依赖项发生变化时
        return () => {
            controller.abort();
        }
    }, [])

    return (
        <>
            <p>color颜色是:{color}</p>
        </>
    )
}

export const ColorFatherCom: React.FC = () => {
    const [flag, setFlag] = useState(false);

    return (
        <>
            <br></br>
            <button onClick={() => setFlag(!flag)}>点击切换</button>
            {flag && <ColorChildCom></ColorChildCom>}
        </>
    )
}

export const MouseInfo: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        let timerId: null | NodeJS.Timeout = null
        const mouseMoveHandler = (e: MouseEvent) => {
            if (timerId !== null) return
            timerId = setTimeout(() => {
                console.log(e)
                setPosition({ x: e.clientX, y: e.clientY });
                timerId = null
            }, 100)
        }
        window.addEventListener('mousemove', mouseMoveHandler)
        // 组件卸载时，return清理函数触发
        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])
    return (
        <>
            <p>鼠标位置:{position.x},{position.y}</p>
            <button></button>
        </>
    )
}

export const TestMouseInfo: React.FC = () => {
    const [flag, setFlag] = useState(true);

    return (
        <>
            <button onClick={() => setFlag(!flag)}>切换</button>
            {flag && <MouseInfo></MouseInfo>}
        </>
    )
}
