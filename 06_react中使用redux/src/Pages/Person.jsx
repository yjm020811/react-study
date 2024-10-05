import React, { PureComponent } from 'react'
import store from '../store'

export class Person extends PureComponent {
    componentDidMount(){
        store.subscribe(()=>{
            const state = store.getState()
            this.setState({counter:state.counter})
        })
    }
    constructor() {
        super()
        this.state = {
            counter: store.getState().counter
        }
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                <h2>Person:{counter}</h2>
            </div>
        )
    }
}

export default Person