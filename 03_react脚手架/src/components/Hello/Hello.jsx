import React from "react";
import './Hello.css'

// 创建App组件
class Hello extends React.Component {
    constructor(props) {
        console.log(props)
        super(props);
        // 定义数据
        this.state = {
            message: '你好,react',
            name: 'yjm',
            age: 20,
            names:["abc", "cba", "nba"],
            age1:100,
            imgUrl:'https://img2.baidu.com/it/u=3319209296,2115459518&fm=253&fmt=auto&app=138&f=JPEG?w=755&h=500'
        }
    }

    // 事件函数
    btnClick(age) {

       this.setState({
            age:age+1
       })
    }

    // 渲染函数
    render() {
        // 将数据解构
        // console.log(this.props)
        const {message, name, age,names,age1,imgUrl} = this.state
        const {banners} = this.props
        // 渲染页面
        return (
            // 只能有一个根元素
            <div className="demo">
                <h2>{message}</h2>
                <h2>{name}</h2>
                <h2>{age}</h2>
                {age1>100?'傻逼':'nicaishi1'}
                <button onClick={() => this.btnClick()}>点击+1</button>
                {/* 注意这里不要加'' */}
               <img src={imgUrl} alt="" />
                
                <h2>{names}</h2>
                <ul>
                    {
                        banners.map((item) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>

        )
    }
}

// 暴露App组件
export default Hello;
