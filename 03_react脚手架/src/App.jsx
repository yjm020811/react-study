import React from "react";


import Hello from "./components/Hello/Hello";
import Welcome from "./components/Welcome/Welcome";
import Message from "./components/message/Message";

// 创建App组件
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            banners:["新歌曲","新mv","新歌单"],
            counter:100
        }
    }
    render() {
        const{banners,counter}=this.state
        return (
            <div>
                <Hello banners={banners}></Hello>
                <Welcome></Welcome>
                <Message></Message>
                <h2>当前计数:{counter}</h2>
            </div>
        )
    }
}

// 暴露App组件
export default App;
