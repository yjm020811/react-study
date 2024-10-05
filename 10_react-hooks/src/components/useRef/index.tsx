import React, { useRef, useState, useEffect, useImperativeHandle } from "react";


// p10.获取DOM元素
export const InputFocus: React.FC = () => {
    // 1.创建ref引用
    const inputRef = useRef<HTMLInputElement>(null);

    const getFocus = () => {
        // 3.获取ref引用的dom元素
        inputRef.current?.focus();
    }
    return (
        <>
            {/* 2.绑定ref引用 */}
            <input ref={inputRef} type="text" />
            <button onClick={getFocus}>获取焦点</button>
        </>
    )
}

// p11.存储组件渲染周期之间的共享数据
export const Counter: React.FC = () => {
    const [count, setCount] = useState(0);
    // useRef()只在组件首次渲染时运行一次，不会因为setCount改变了count的值而重新渲染
    const prevCountRef = useRef<number>(count);

    const add = () => {
        setCount(count + 1);
        prevCountRef.current = count;
    }

    return <>
        <div>新值是：{count}，旧值是：{prevCountRef.current}</div>
        <button onClick={add} >+1</button>
    </>
}

// p12 useRef使用注意事项
export const RefTimer: React.FC = () => {
    const [count, setCount] = useState(0);
    const time = useRef<number>(Date.now());

    const updateTime = () => {
        // 每次点击按钮，都会给time赋新值，但是useRef值的变化不会导致组件的重新渲染
        time.current = Date.now();
        console.log(time.current);
    }

    console.log("组件重新渲染了");

    // useEffect会在组件首次渲染完毕之后默认执行一次
    // 组件每次渲染完毕之后，useEffect都会执行
    // 但是time.current的变化不会导致useEEffect回调重新执行，如果给了依赖项，则还需要判断依赖项是否发生变化，再决定是否触发回调
    useEffect(() => {
        console.log("触发了useEffect回调执行", time.current)
        // time.current的变化不会导致useEEffect回调重新执行
    }, [time.current])

    return <>
        {/* count的值变化了，组件重新渲染，但是组件重新渲染不会对useRef的值进行重复初始化 */}
        <h3>count的值是：{count},time的值是{time.current}</h3>
        <button onClick={() => {
            setCount(count + 1);
        }
        }>+1</button>
        <button onClick={updateTime}>给time赋新值</button>
    </>
}

// p13-p16.获取子组件的实例,需要使用forwardRef，需要结合useImperativeHandle使用
// 父组件
export const Father: React.FC = () => {
    const childRef = useRef<{ count: number; reset: () => void }>()
    // 按钮的点击事件处理函数
    const onShowRef = () => {
        // 此时父组件 Father 中获取到的 ref.current 是 null，因为子组件 Child 没有向外暴露任何自己内部的东西。
        console.log(childRef.current)
    }

    const onReset = () => {
        // 此时父组件 Father 中获取到的 ref.current 是子组件 Child 的实例，因为子组件 Child 使用了 useImperativeHandle 向外暴露了 count 和 setCount
        childRef.current?.reset()
    }

    return (
        <>
            <h1>Father 父组件</h1>
            <hr />
            {/* 下面这行代码中的 ref 使用不正确，因为 Child 组件是函数式组件，无法被直接引用  */}
            <Child ref={childRef} />
            <button onClick={onShowRef}>show Ref</button>
            <button onClick={onReset}>重置子组件count</button>
        </>
    )
}

// 子组件
const Child = React.forwardRef((props, ref) => {
    const [count, setCount] = useState(0)

    const add = (step: number) => {
        setCount((prev) => (prev += step))
    }

    // 这个新对象会被传递给父组件中 ref.current 的值
    useImperativeHandle(ref, () => ({
        count,
        reset: () => setCount(0)
    }))

    return (
        <>
            <h3>Child 子组件 {count}</h3>
            <button onClick={() => add(-1)}>-1</button>
            <button onClick={() => add(1)}>+1</button>
        </>
    )
}) 

// p17：useImperativeHandle第三个参数的作用
// 1.空数组：只在子组件首次被渲染时触发函数
// 2.依赖项数组：首次被渲染和依赖项发生变化时触发函数
// 3.不传：每次子组件渲染时都会触发函数
