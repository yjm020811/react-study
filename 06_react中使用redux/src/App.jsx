import React from "react";
import Hello from "./Pages/Hello";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Category from "./Pages/Category";
import Person from "./Pages/Person";

import store from "./store";

// 创建App组件
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            // 获取初始化的值
            counter: store.getState().counter
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState()
            this.setState({ counter: state.counter })
        })
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>App counter:{counter}</h2>
                <Hello ></Hello>
                <Profile></Profile>
                <About></About>
                <Category></Category>
                <Person></Person>
            </div>
        )
    }
}

// 暴露App组件
export default App;
