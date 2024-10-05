import React from "react";
import './Welcome.css'

class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            class1: '尚硅谷',
            teacher: '张天禹',
            isReady: false,
            books: [
                {id: 1, name: '假如给我三天光明', price: 32},
                {id: 2, name: '朝花夕拾', price: 30},
                {id: 3, name: '呐喊', price: 35}
            ],
            person: {
                name: 'yjm',
                age: 3
            },
            num:''
        }
    }

    btnClick(name) {
        this.setState({
            class1: 'shabi',
            teacher: 'pink',

        })
        console.log(name)
    }
    addOne(count){
        console.log("count",count);
    }
    addFive(count){
        console.log(count);
    }
    inputChange(e){
        // 获取输入框中的内容
        console.log(e.target.value);
        this.setState({
            num:e.target.value
        })
    }

    render() {
        const {class1, teacher, isReady, books, person,num} = this.state
        let showElement = null

        if (isReady) {
            showElement = <h2>准备好了</h2>
        } else {
            showElement = <h2>没准备好</h2>
        }

        return (
            <div className='school'>
                <h2>{class1}</h2>
                <h2>{teacher}</h2>
                {/*箭头函数可以更好的传参*/}
                <button onClick={() => this.btnClick('yjm')}>点击事件</button>
                {/*这里是大括号不是尖括号*/}
                {showElement}
                <h2>{isReady ? '你好' : '我不好'}</h2>
                <ul>
                    {
                        books.map((item, index) => {
                            return (
                                <div className="item" key={item.id}>
                                    <h3>书名: {item.name}</h3>
                                    <h3>价格: {item.price}</h3>
                                </div>
                            )
                        })
                    }
                </ul>
                {/*不能插入整个对象,只能插入对象的子元素*/}
                <h2>{person.name}</h2>
                <button onClick={e=>this.addOne(1)}>+1</button>
                <button onClick={e=>this.addFive(5)}>+5</button>
                <input type="text" value={num} onChange={e=>this.inputChange(e)} />
            </div>
        )
    }
}

export default Welcome;
